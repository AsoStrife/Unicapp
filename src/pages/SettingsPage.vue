<template>

    <f7-page name="SettingsPage" :page-content="false">

        <Navbar />

        <f7-page-content>

            <f7-block-title>{{$t('message.settings.title')}}</f7-block-title>

            <f7-list>

                <f7-list-item>
                    <span>{{$t('message.settings.darkTheme')}}</span>
                    <f7-toggle init @toggle:change="onChangeDarkTheme" v-model:checked="isChecked"></f7-toggle>
                </f7-list-item>
   
                <f7-list-item :title="$t('message.settings.selectLanguage')" smart-select :smart-select-params="{openIn: 'popover'}">
                    <select name="language" v-model="language">
                        <option v-for="(item, key) in supportedLanguages" :key="key" 
                            :value="item.lang" 
                            :selected="item.lang == this.language">{{item.name}}
                        </option>
                    </select>

                </f7-list-item>
            </f7-list>

        </f7-page-content>
        
    </f7-page>
    
</template>

<style scoped>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import store from '../js/unicapp/store'
    import constants from '../js/unicapp/constants'

    export default {
        name: "Settings",
        data() {
            return {
                isChecked: store.getDarkTheme(),
                language: this.$i18n.locale,
                supportedLanguages: constants.i18n.supportedLanguages
            }
        },
        methods: {
            onChangeDarkTheme(e){
                store.setDarkTheme(e)
                e ? document.getElementById('body').className = "dark" : document.getElementById('body').className = ""
                this.isChecked = e
            }
        },
        mounted() {
            f7ready(() => {
                var toggle = f7.toggle.get('.toggle')
            })
            
            this.$watch(
                (vm) => [vm.language],
                (val) => {
                    this.$i18n.locale = val[0]
                    store.setCurrentI18n(val[0])
                },
                {
                    immediate: true,
                    deep: true,
                }
            )
        },
        components: { 
            Navbar
        }
    }
</script>
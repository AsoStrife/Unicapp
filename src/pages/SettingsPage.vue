<template>

    <f7-page name="SettingsPage" :page-content="false">

        <Navbar />

        <f7-page-content>

            <f7-block-title>{{$t('message.settings.title')}}</f7-block-title>
            <f7-list simple-list>
                <f7-list-item>
                    <span>{{$t('message.settings.darkTheme')}}</span>
                    <f7-toggle init @toggle:change="onChangeDarkTheme" v-model:checked="isChecked"></f7-toggle>
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

    export default {
        name: "Settings",
        data() {
            return {
                isChecked: store.getDarkTheme()
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

                var toggle = f7.toggle.get('.toggle');

                if (toggle.checked) {
                    console.log("asd")
                }

            })
        },
        components: { 
            Navbar
        }
    }
</script>
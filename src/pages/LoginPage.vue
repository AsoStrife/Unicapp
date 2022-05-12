<template>

    <f7-page name="login" :page-content="false">

        <Navbar :showSearchButton="false" :backLink="false" />

        <f7-page-content>
            
            <div class="text-align-center mt-5"><img src="/logo/unicapp-circle-124x124.png" alt="" /></div>

            <form>
                <f7-list class="mb-0">

                    <f7-list-item :title="$t('message.login.university')" smart-select 
                        :smart-select-params="this.popupSettings">
                        <select :name="selectedUniversity" v-model="selectedUniversity">
                            <option v-for="(item, key) in this.universities" :key="key" :value="key">{{item.description}}</option>
                        </select>
                    </f7-list-item>
                </f7-list>
                
                <f7-list class="mt-0" no-hairlines-md>
                    <f7-list-input
                        outline
                        :label="$t('message.login.usernameLabel')"
                        :placeholder="$t('message.login.emailPlaceholder')"
                        floating-label
                        type="text"
                        clear-button
                        :value="username"
                        @input="username = $event.target.value"
                    >
                    </f7-list-input>

                    <f7-list-input
                        outline
                        :label="$t('message.login.passwordLabel')"
                        :placeholder="$t('message.login.passwordPlaceholder')"
                        floating-label
                        type="password"
                        autococomplete="false"
                        clear-button
                        :value="password"
                        @input="password = $event.target.value"
                    >
                    </f7-list-input>

                </f7-list>
            </form>
            <f7-block>
                <f7-button fill preloader :loading="this.isLoading" 
                    @click="login" 
                    :disabled="this.isLoading || isEmpty(this.username) || isEmpty(this.password)"> {{$t('message.login.loginButton')}} 
                </f7-button>
            </f7-block>
        </f7-page-content>
    </f7-page>
</template>

<script>
    import { f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import universities from '../js/universities'
    import api from '../js/api'
    import store from '../js/store'

    export default {
        name: 'Login',
        components: {
            Navbar
        },
        setup(){
        },
        data() {
            return {
                isLoading: false,
                username: 'a.corriga1',
                password: 'Unica2019',
                selectedUniversity: 9, //-1,
                popupSettings: {
                    openIn: 'popup', 
                    searchbar: true, 
                    searchbarPlaceholder: this.$t('message.login.searchUniversity'), 
                    popupCloseLinkText: this.$t('message.general.close')
                },
                universities: universities, //.filter(x => x.swagger_url != ''),
                isLogged: store.getCredentials == null ? false : true
            }
        },
        mounted(){

        },
        methods: {
            async login() {
                self = this

                this.isLoading = true;
                console.log(this.username)
                console.log(this.password)
                console.log(this.selectedUniversity)

                store.setSelectedUniversity(this.selectedUniversity)
                store.setCredentials(this.username, this.password)
                
                try{
                    let response = await api.login(this.username, this.password)
                    console.log(response)

                    self.isLoading = false
                    //f7.views.main.router.navigate('/home/')
                    //f7.emit('login')
                }
                catch(e){
                    self.isLoading = false
                    
                    f7.toast.create({
                        text: self.$t('message.login.loginWrong'),
                        closeTimeout: 2000,
                        destroyOnClose: true,
                        position: 'bottom',
                    }).open()

                    console.error(e)
                    store.clearAll()
                }
                
            },
            isEmpty(str) {
                return (!str || str.length === 0);
            }
        }
    }
</script>
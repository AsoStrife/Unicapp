<template>

    <f7-page name="LoginPage" :page-content="false">

        <Navbar />

        <f7-page-content>
            
            <div class="text-align-center mt-5"> <img src="/logo/unicapp-circle-124x124.png" alt="" class="img-circle-login"/></div>

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
                        :label="$t('message.login.usernameLabel')"
                        :placeholder="$t('message.login.emailPlaceholder')"
                    
                        type="text"
                        clear-button
                        :value="username"
                        @input="username = $event.target.value"
                        autocomplete="false"
                    >
                    </f7-list-input>
                    
                    <PasswordInput 
                        :label="$t('message.login.passwordLabel')"
                        :value="password" 
                        :placeholder="$t('message.login.passwordPlaceholder')" 
                        @input="password = $event.target.value"
                        autocomplete="false"
                        />
                    

                </f7-list>
            </form>
            <f7-block>
                <f7-button fill preloader :loading="this.isLoading" 
                    @click="login" 
                    :disabled="this.isLoading || isEmpty(this.username) || isEmpty(this.password) || isEmpty(this.selectedUniversity)"> {{$t('message.login.loginButton')}} 
                </f7-button>
            </f7-block>

            <f7-block class="text-align-center">
                <a href="/settings/">{{$t('message.login.changeSettings')}}</a>
            </f7-block>
        </f7-page-content>
    </f7-page>
</template>
<style scoped>
    .img-circle-login{
        -webkit-border-radius: 150px;
        -moz-border-radius: 150px;
        border-radius: 150px;
    }
</style>
<script>
    import { f7, f7ready } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import api from '../js/unicapp/api'
    import store from '../js/unicapp/store'
    import utils from '../js/unicapp/utils'
    import universities from '../js/unicapp/universities'
    import PasswordInput from '../components/PasswordInput.vue';

    export default {
        name: 'LoginPage',
        components: {
            Navbar,
            PasswordInput
        },
        setup(){
        },
        data() {
            return {
                isLoading: false,
                username: '',
                password: '',
                selectedUniversity: null, //-1,
                popupSettings: {
                    openIn: 'popup', 
                    searchbar: true, 
                    searchbarPlaceholder: this.$t('message.login.searchUniversity'), 
                    popupCloseLinkText: this.$t('message.general.close'),
                    closeOnSelect: true
                },
                universities: [],
                isLogged: store.getCredentials == null ? false : true
            }
        },
        mounted(){
            var self = this

            f7ready( async() => {
                f7.preloader.show()
                await this.getUniversities()
                f7.preloader.hide()
                
                self.$firebase.setCurrentScreen("LoginPage")
            })
        },
        methods: {
            async login() {
                self = this

                this.isLoading = true;
                store.setSelectedUniversity(this.universities[this.selectedUniversity])
                store.setCredentials(this.username, this.password)
                
                try{
                    let response = await api.login(this.username, this.password)
        
                    let user = {
                        id : response.user.id, 
                        idAb: response.user.idAb,
                        persId: response.user.persId,
                        codFis: response.user.codFis,
                        firstName: utils.general.toProperCase(response.user.firstName),
                        lastName: utils.general.toProperCase(response.user.lastName), 
                        
                    }
                    
                    store.setUser(user)
                    store.setCareers(response.user.trattiCarriera)
                    
                    self.isLoading = false

                    self.$firebase.logEvent("login")
                    f7.emit('login')

                    f7.views.main.router.navigate('/careers/', {
                        reloadAll: true
                    })

                    
                }
                catch(e){
                    self.isLoading = false
                    
                    self.$errorHandling.handle(e, self.$i18n)
                    store.clearAll()
                }
                
            },
            isEmpty(str) {
                return (!str || str.length === 0);
            },
            async getUniversities() {
                try{
                    this.universities = await api.universities()
                }
                catch(e){
                    console.error(e)
                }
            }
        }
    }
</script>
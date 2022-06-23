<template>

    <Navbar :backLink="false" />

    <f7-page name="LoginPage" :page-content="false">

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
    import universities from '../js/unicapp/universities'
    import api from '../js/unicapp/api'
    import store from '../js/unicapp/store'
    import utils from '../js/unicapp/utils'

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
                username: '',
                password: '',
                selectedUniversity: 6, //-1,
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

                store.setSelectedUniversity(this.selectedUniversity)
                store.setCredentials(this.username, this.password)
                
                try{
                    let response = await api.login(this.username, this.password)
        
                    let user = {
                        id : response.user.id, 
                        idAb: response.user.idAb,
                        persId: response.user.persId,
                        codFis: response.user.codFis,
                        firstName: utils.toProperCase(response.user.firstName),
                        lastName: utils.toProperCase(response.user.lastName), 
                        
                    }
                    
                    store.setUser(user)
                    store.setCareers(response.user.trattiCarriera)
                    
                    self.isLoading = false

                    f7.views.main.router.navigate('/careers/')
                    f7.emit('login')
                }
                catch(e){
                    self.isLoading = false
                    
                    f7.toast.create({
                        text: self.$t('message.login.loginWrong'),
                        closeTimeout: 3000,
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
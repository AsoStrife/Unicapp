<template>
    <f7-app v-bind="f7params" >

    <f7-panel id="panel-nested" theme-dark left cover container-el="#panel-page">
        <f7-page>
            
            <PanelHeader />

            <f7-list>
                <f7-list-item :title="$t('message.panelList.login')" link="/login/" panel-close v-if="this.showLogin"></f7-list-item>

                <f7-list-item divider :title="$t('message.panelList.yourProfile')" v-if="this.showCareers"></f7-list-item>
                <f7-list-item :title="$t('message.panelList.home')" link="/" panel-close v-if="this.showLoggedMenu"></f7-list-item>
                <f7-list-item :title="$t('message.panelList.booklet')" link="/booklet/" panel-close v-if="this.showLoggedMenu"></f7-list-item>
                <f7-list-item :title="$t('message.panelList.taxes')" link="/taxes/" panel-close v-if="this.showLoggedMenu"></f7-list-item>
                <f7-list-item :title="$t('message.panelList.tests')" link="/tests/" panel-close v-if="this.showLoggedMenu"></f7-list-item>
                
                <f7-list-item :title="$t('message.panelList.avgCalculator')" link="/average_calculator/" panel-close v-if="this.showLoggedMenu"></f7-list-item>
                
                <!--<f7-list-item :title="$t('message.panelList.settings')" link="/settings/" panel-close></f7-list-item>-->
                <f7-list-item divider :title="$t('message.panelList.handle')" v-if="this.showCareers"></f7-list-item>

                <f7-list-item :title="$t('message.panelList.info')" link="/info/" panel-close></f7-list-item>

                <f7-list-item :title="$t('message.panelList.careers')" link="/careers/" panel-close v-if="this.showCareers"></f7-list-item>
                <f7-list-item :title="$t('message.panelList.logout')" link="/logout/" panel-close v-if="this.showCareers"></f7-list-item>
            </f7-list>
        </f7-page>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>

    </f7-app>
</template>

<style scoped>
    .list {
        margin-top: 0;
    }
</style>

<script>
    import { ref, onMounted } from 'vue'
    import { f7, f7ready } from 'framework7-vue'

    import { getDevice }  from 'framework7/lite-bundle'
    import capacitorApp from '../js/capacitor-app.js'
    import routes from '../js/routes.js'
    import PanelHeader from './PanelHeader.vue'

    import store from '../js/unicapp/store'

    export default {
        data() {
            return {
                showLogin: (store.getCredentials() == null && store.getSelectedCareer() == null),
                showCareers: (store.getCredentials() != null),
                showLoggedMenu: (store.getCredentials() != null && store.getSelectedCareer() != null)
            }
        },
        components: { 
            PanelHeader
        },
        async mounted(){
            f7ready(() => {
                f7.on('login', (data) => {
                    this.setMenu()
                })

                f7.on('selectedCareer', (data) => {
                    this.setMenu()
                })

                f7.on('logout', (data) => {
                    this.setMenu()
                })
                
            })
        },
        methods: {
            setMenu() {
                this.showLogin =  (store.getCredentials() == null && store.getSelectedCareer() == null),
                this.showCareers = (store.getCredentials() != null),
                this.showLoggedMenu =  (store.getCredentials() != null && store.getSelectedCareer() != null)
            }
        },
        setup() {
            const device = getDevice();
            // Framework7 Parameters
            const f7params = {
                name: 'Unicapp', // App name
                theme: 'auto', // Automatic theme detection
                id: 'com.moapps.unicapp', // App bundle ID
                // App routes
                routes: routes,
                // Input settings
                input: {
                    scrollIntoViewOnFocus: device.capacitor,
                    scrollIntoViewCentered: device.capacitor,
                },
                // Capacitor Statusbar settings
                statusbar: {
                    iosOverlaysWebView: false,
                    androidOverlaysWebView: false,
                    androidTextColor: "white", 
                    androidBackgroundColor: "#3d66c6"
                },
            };

            onMounted(() => {
                f7ready(() => {
                    // Init capacitor APIs (see capacitor-app.js)
                    if (device.capacitor) {
                        capacitorApp.init(f7);
                    }
                    // Call F7 APIs here
                });
            });

            return {
                f7params,
            }
        }
    }
</script>
<template>

    <f7-page name="TaxPage" :page-content="false">   

        <Navbar />

        <f7-page-content>
            <TitleDetailPage :bg="this.utils.tax.getStatusBg(this.tax)" :text="this.tax.tassaDes" />

            <f7-card>
                <f7-card-content>
                    <f7-list>
                        <f7-list-item :title="$t('message.tax.invoice')" :after="this.tax?.fattId">
                            <template #media>
                                <f7-icon md="material:event" ios="f7:calendar"></f7-icon>
                            </template>
                        </f7-list-item>

                        <f7-list-item :title="$t('message.tax.amount')" :after="this.tax?.importoPag + $t('message.general.euro')">
                            <template #media>
                                <f7-icon md="material:event" ios="f7:calendar"></f7-icon>
                            </template>
                        </f7-list-item>

                        <f7-list-item :title="$t('message.tax.mav')" :after="this.tax?.numeroMav">
                            <template #media>
                                <f7-icon md="material:school" ios="f7:hexagon"></f7-icon>
                            </template>
                        </f7-list-item>

                        <f7-list-item :title="$t('message.tax.expiration')" :after="this.utils.general.removeTimeFromString(this.tax?.scadenzaAddebito)">
                            <template #media>
                                <f7-icon md="material:date_range" ios="f7:calendar"></f7-icon>
                            </template>
                        </f7-list-item>


                        <f7-list-item :title="$t('message.tax.paymentDate')" :after="this.utils.general.removeTimeFromString(this.tax?.dataPagamento)">
                            <template #media>
                                <f7-icon md="material:event" ios="f7:calendar"></f7-icon>
                            </template>
                        </f7-list-item>
                        
                    </f7-list>
                </f7-card-content>
            </f7-card>
        </f7-page-content>

    </f7-page>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';
    import TitleDetailPage from '../components/TitleDetailPage.vue'
    import utils from '../js/unicapp/utils'

    export default {
        name: "TaxPage",
        props: {
            tax: {
                default: {}
            }
        },
        data() {
            return {
                utils: utils
            }
        },
        methods: {
        },
        mounted() {
            var self = this
            
            f7ready(() => {
                self.$firebase.setCurrentScreen("TaxPage")
            })
        },
        components: { 
            Navbar,
            TitleDetailPage
        }
    }
</script>
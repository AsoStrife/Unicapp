<template>

    <f7-page name="TestPage" :page-content="false">
        
        <Navbar :backLink="true" />

        <f7-page-content>
            <TitleDetailPage :bg="this.utils.exam.getBgBookable(this.exam)" :text="this.exam.adDes" />

            <f7-card>
                <f7-card-content>
                    <f7-list>
                        
                        <f7-list-item :title="$t('message.test.chairman')" 
                            :after="utils.general.toProperCase(exam?.presidenteNome) + ' ' + utils.general.toProperCase(exam?.presidenteCognome)">
                            <template #media>
                                <f7-icon md="material:person" ios="f7:person"></f7-icon>
                            </template>
                        </f7-list-item>

                        <f7-list-item :title="$t('message.test.registered')" :after="String(exam?.numIscritti)">
                            <template #media>
                                <f7-icon md="material:group" ios="f7:person_2"></f7-icon>
                            </template>
                        </f7-list-item>

                        <f7-list-item :title="$t('message.test.dateExam')" :after="this.utils.general.removeTimeFromString(exam?.dataInizioApp)">
                            <template #media>
                                <f7-icon md="material:event" ios="f7:calendar"></f7-icon>
                            </template>
                        </f7-list-item>

                        <f7-list-item :title="$t('message.test.dateStartSub')" :after="this.utils.general.removeTimeFromString(exam?.dataInizioIscr)">
                            <template #media>
                                <f7-icon md="material:date_range" ios="f7:calendar"></f7-icon>
                            </template>
                        </f7-list-item>

                        <f7-list-item :title="$t('message.test.dateEndSub')" :after="this.utils.general.removeTimeFromString(exam?.dataFineIscr)">
                            <template #media>
                                <f7-icon md="material:date_range" ios="f7:calendar"></f7-icon>
                            </template>
                        </f7-list-item>

                    </f7-list>
                </f7-card-content>
            </f7-card>
        </f7-page-content>
        
    </f7-page>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import TitleDetailPage from '../components/TitleDetailPage.vue'
    import Alert from '../components/Alert.vue'
    import utils from '../js/unicapp/utils'
    import api from '../js/unicapp/api'

    export default {
        name: "TestPage",
        props: {
            exam: {
                default: {}
            }
        },
        data() {
            return {
                utils: utils,
                isBooked: false
            }
        },
        methods: {
            
        },
        mounted() {
            var self = this
            f7ready(() => {
                self.$firebase.setCurrentScreen("TestPage")

                /*api.isTestBooked(this.exam?.adsceId).then(response => {
                    console.log("Exam", this.exam)
                    console.log("Response", response)
                    if(response.length > 0)
                        this.isBooked = true
                })*/
            })
        },
        components: { 
            Navbar,
            TitleDetailPage,
            Alert
        }
    }
</script>
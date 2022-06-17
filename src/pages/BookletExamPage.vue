<template>
    <f7-page name="BookletExam">
        <Navbar backLink="true"/>

        <TitleDetailPage :bg="this.getBg(this.exam)" :text="this.exam.adDes" />

        <f7-card>
            <f7-card-content>
                <f7-list>
                    <f7-list-item :title="$t('message.bookletExam.grade')" :after="this.getGrade(this.exam)">
                        <template #media>
                            <f7-icon md="material:assignment_turned_in" ios="f7:doc_checkmark"></f7-icon>
                        </template>
                    </f7-list-item>

                    <f7-list-item :title="$t('message.bookletExam.cfu')" :after="this.exam?.peso">
                        <template #media>
                            <f7-icon md="material:school" ios="f7:hexagon"></f7-icon>
                        </template>
                    </f7-list-item>

                    <f7-list-item :title="$t('message.bookletExam.attendingYear')" :after="this.exam?.aaFreqId">
                        <template #media>
                            <f7-icon md="material:date_range" ios="f7:calendar"></f7-icon>
                        </template>
                    </f7-list-item>

                    <f7-list-item :title="$t('message.bookletExam.confirmationDate')" :after="this.removeTimeFromString(this.exam?.esito?.dataEsa)">
                        <template #media>
                            <f7-icon md="material:event" ios="f7:calendar"></f7-icon>
                        </template>
                    </f7-list-item>
                </f7-list>
            </f7-card-content>
        </f7-card>
        


    </f7-page>
</template>


<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import Alert from '../components/Alert.vue'
    import api from '../js/unicapp/api'
    import utils from '../js/unicapp/utils'
    import constants from '../js/unicapp/constants'
    import TitleDetailPage from '../components/TitleDetailPage.vue'

    export default {
        name: "BookletExam",
        props: {
            exam: {
                default: {}
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            getGrade(exam){
                
                if(exam?.esito?.voto != null)
                    return exam.esito.voto + (exam.esito.lodeFlg == 1 ? constants.booklet.laudeSymbol : "")
                
                if(exam?.esito?.tipoGiudCod != "")
                    return exam.esito.tipoGiudCod

                return constants.emoji.redCirle
            },
            getBg(exam){
                if(exam?.esito?.voto != null || exam?.esito?.tipoGiudCod != "")
                    return 'success'
                    
                return 'danger'
            },
            removeTimeFromString(string){
                return string.split(" ")[0]
            }
            
        },
        mounted() {
            f7ready(() => {
                console.log(this.exam)
            });
        },
        components: { 
            Navbar,
            TitleDetailPage
        }
    }
</script>
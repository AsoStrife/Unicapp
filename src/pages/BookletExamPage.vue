<template>
    <f7-page name="BookletExam">
        <Navbar />

        <TitleDetailPage :bg="this.getBg(this.exam)" :text="this.exam.adDes" />

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
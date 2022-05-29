<template>
    <f7-page name="BookletExam">
        <Navbar />

        <f7-block-title>{{$t('message.bookletExam.title')}}</f7-block-title>
        

    </f7-page>
</template>

<style>
    
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import Alert from '../components/Alert.vue'
    import api from '../js/unicapp/api'
    import utils from '../js/unicapp/utils'
    import constants from '../js/unicapp/constants'

    export default {
        name: "BookletExam",
        props: {
            exam: {
                default: {}
            }
        },
        data() {
        },
        methods: {
            getGrade(exam){
                
                if(exam?.esito?.voto != null)
                    return exam.esito.voto + (exam.esito.lodeFlg == 1 ? constants.booklet.laudeSymbol : "")
                
                if(exam?.esito?.tipoGiudCod != "")
                    return exam.esito.tipoGiudCod

                return constants.emoji.redCirle
            }
            
        },
        mounted() {
            f7ready(() => {
                console.log(this.exam)
            });
        },
        components: { 
            Navbar,
            Alert
        }
    }
</script>
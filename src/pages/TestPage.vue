<template>
    <f7-page name="BookletExam">
        <Navbar :backLink="true"/>

        <TitleDetailPage :bg="this.getBg(this.exam)" :text="this.exam.adDes" />

    </f7-page>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import TitleDetailPage from '../components/TitleDetailPage.vue'
    import constants from '../js/unicapp/constants'

    export default {
        name: "TestPage",
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
            getBg(exam){
                return exam.statoDes == constants.tests.bookable ? 'success' : 'danger'
            }
            
        },
        mounted() {
            f7ready(() => {
            });
        },
        components: { 
            Navbar,
            TitleDetailPage
        }
    }
</script>
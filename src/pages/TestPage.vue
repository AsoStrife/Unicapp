<template>
    <f7-page name="BookletExam">
        <Navbar :backLink="true"/>

        <TitleDetailPage :bg="this.utils.exam.getBg(this.exam)" :text="this.exam.adDes" />

    </f7-page>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import TitleDetailPage from '../components/TitleDetailPage.vue'
    import utils from '../js/unicapp/utils'

    export default {
        name: "TestPage",
        props: {
            exam: {
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
            f7ready(() => {
            })
        },
        components: { 
            Navbar,
            TitleDetailPage
        }
    }
</script>
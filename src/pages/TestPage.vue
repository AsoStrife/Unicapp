<template>
    <f7-page name="BookletExam">
        <Navbar />

        <f7-block-title>{{$t('message.test.title')}}</f7-block-title>
        

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
        name: "TestPage",
        props: {
            exam: {
                default: {}
            }
        },
        data() {
        },
        methods: {
            
            
        },
        mounted() {
            f7ready(() => {
            });
        },
        components: { 
            Navbar,
            Alert
        }
    }
</script>
<template>

    <f7-page name="ErrorPage" :page-content="false">
        <Navbar />
        
        <f7-page-content>
            <f7-block class="mt-0 mb-0">
                <Alert :text="errorMsg" bg="bg-danger" md="warning" ios="xmark"/>
            </f7-block>
        </f7-page-content>
        
    </f7-page>
</template>

<style scoped>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import Alert from '../components/Alert.vue'

    export default {
        name: "ErrorPage",
        data() {
            return {}
        },
        props: {
            errorMsg: {
                default: "",
                type: String
            }
        },
        methods: {},
        mounted() {
            var self = this

            f7ready(() => {
                self.$firebase.setCurrentScreen("ErrorPage")
            })
        },
        components: { 
            Navbar, 
            Alert
        }
    }
</script>
<template>

    <f7-page name="SettingsPage" :page-content="false">
        <Navbar />

        <f7-page-content>

        </f7-page-content>
        
    </f7-page>
    
</template>

<style scoped>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';


    export default {
        name: "Settings",
        data() {
            return {};
        },
        methods: {},
        mounted() {
            f7ready(() => {
            });
        },
        components: { 
            Navbar
        }
    }
</script>
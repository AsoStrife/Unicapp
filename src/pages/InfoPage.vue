<template>
    <f7-page name="Info">
        <Navbar />

    </f7-page>
</template>

<style>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';


    export default {
        name: "Info",
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
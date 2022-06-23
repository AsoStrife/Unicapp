<template>

    <Navbar />

    <f7-page name="EmptyPage">

    </f7-page>
</template>

<style scoped>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';


    export default {
        name: "Empty",
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
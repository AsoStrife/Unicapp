<template>

    <f7-navbar :sliding="false">

        <f7-nav-left :back-link="this.backLink">
            <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
        </f7-nav-left>
            
    </f7-navbar>

</template>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    export default {
        name: "Navbar", 
        props: {
            backLink: Boolean
        },
        data() {
            return {
                searchQuery: "",
                awaitingSearch: false,
            }
        },
        methods: {
            
        },
        mounted() {
            f7ready(() => {
                
            })
        }
    }
</script>

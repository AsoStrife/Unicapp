<template>
    <f7-page name="home">
        <Navbar />

        <NameProfilePic />

        <Ratings />

        <f7-block class="mt-0 mb-0">
            <Alert text="La situazione tasse è regolare" bg="bg-success" md="done" ios="checkmark_alt"/>
            <Alert text="Ci sono tasse da pagare" bg="bg-warning" md="warning" ios="xmark"/>
        </f7-block>

        <PersonalData />

    </f7-page>
</template>

<style>
    img {
        width: auto;
    }
    
    h4, h5 {
        margin: 0;
    }
     h4 {
         font-size: 20px;
     }

    .card{
        padding: 20px 0 20px 0;
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import NavbarVue from '../components/Navbar.vue';
    import Navbar from '../components/Navbar.vue';
    import Alert from '../components/Alert.vue';
    import Ratings from '../components/User/Ratings.vue';
    import NameProfilePic from '../components/User/NameProfilePic.vue';
    import PersonalData from '../components/User/PersonalData.vue';

    export default {
        name: "Home",
        data() {
            return {};
        },
        methods: {},
        mounted() {
            f7ready(() => {
            });
        },
        components: { 
            Navbar,
            Alert,
            NameProfilePic,
            Ratings, 
            PersonalData,
        }
    }
</script>
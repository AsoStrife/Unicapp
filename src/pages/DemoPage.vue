<template>
    <f7-page name="demo">
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

<style></style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';
    import Alert from '../components/Alert.vue';
    import Ratings from '../components/User/Ratings.vue';
    import NameProfilePic from '../components/User/NameProfilePic.vue';
    import PersonalData from '../components/User/PersonalData.vue';

    export default {
        name: "Demo",
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
<template>
    <f7-page name="home">
        <Navbar />

        <NameProfilePic :propsFirstName="this.firstName" :propsLastName="this.lastName" />

        <Ratings />

        <PersonalData />

    </f7-page>
</template>

<style></style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import Alert from '../components/Alert.vue'
    import Ratings from '../components/User/Ratings.vue'
    import NameProfilePic from '../components/User/NameProfilePic.vue'
    import PersonalData from '../components/User/PersonalData.vue'
    import api from '../js/unicapp/api'

    export default {
        name: "Home",
        data() {
            return {
                firstName: null,
                lastName: null,
                photo: "",
                bookletVotesAvg: {}
            };
        },
        methods: {

        },
        mounted() {
            f7ready( async() => {
                api.people().then(response => {
                    console.log(response)
                    this.firstName = response.nome
                    this.lastName = response.cognome
                    console.log(this.firstName)
                    console.log(this.lastName)
                    //$emit('CHANGEVALUES')

                    f7.on('ssss', () => {
                        console.log("cambiati")
                    })
                })
                //this.photo = await api.photo()
                //this.bookletVotesAvg = await api.bookletVotesAvg()
                //console.log(this.person)
            })
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
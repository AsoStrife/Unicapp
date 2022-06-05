<template>
    <f7-page name="home">
        <Navbar />

        <NameProfilePic />

        <Ratings :weightedAvg="weightedAvg" :totalCfu="totalCfu" />

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
    import constants from '../js/unicapp/constants'

    export default {
        name: "Home",
        data() {
            return {
                weightedAvg: constants.defaultValues.weightedAvg,
                totalCfu: constants.defaultValues.totalCfu
            }
        },
        methods: {

        },
        mounted() {
            var self = this
            f7ready( async() => {
                api.people().then(response => {
                    f7.emit('apiPeopleDone', response)
                   
                })

                api.photo().then(response => {
                    f7.emit('apiPhotoDone', response)
                })

                let bookletData = await api.bookletVotesAvg()
                let statsData = await api.bookletStats()

                self.weightedAvg = (bookletData.filter(d => d.base == 30  && d.tipoMediaCod.value == 'P'))[0]?.media
                self.totalCfu = statsData?.umPesoConvalidato
                

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
<template>

    <f7-page name="HomePage" :page-content="false">
        
        <Navbar />

        <f7-page-content ptr @ptr:refresh="refresh">
            <NameProfilePic :firstName="this.firstName" :lastName="this.lastName" :profilePic="this.profilePic"/>

            <Ratings :initialWeightedAvg="this.weightedAvg" :initialTotalCfu="this.totalCfu" />

            <PersonalData :email="this.email" :universityEmail="this.universityEmail" :address="this.address" :mobile="this.mobile"/>
        </f7-page-content>
        
    </f7-page>
</template>


<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import Alert from '../components/Alert.vue'
    import Ratings from '../components/User/Ratings.vue'
    import NameProfilePic from '../components/User/NameProfilePic.vue'
    import PersonalData from '../components/User/PersonalData.vue'
    import api from '../js/unicapp/api'
    import constants from '../js/unicapp/constants'
    import store from '../js/unicapp/store'
    import utils from '../js/unicapp/utils'

    export default {
        name: "Home",
        data() {
            return {
                weightedAvg: constants.defaultValues.weightedAvg,
                totalCfu: constants.defaultValues.totalCfu,

                firstName: constants.defaultValues.firstName, 
                lastName: constants.defaultValues.lastName,
                profilePic: constants.defaultValues.profilePic,

                email: constants.defaultValues.email, 
                universityEmail: constants.defaultValues.email, 
                mobile: constants.defaultValues.mobile, 
                address: constants.defaultValues.address,
            }
        },
        mounted() {
            var self = this
            f7ready( async() => {
                this.loadData()
            })
        },
        methods: {
            async loadData(){
                return new Promise( (resolve, reject) => {
                    api.people().then(data => {
                        this.firstName = utils.general.toProperCase(data?.nome) 
                        this.lastName = utils.general.toProperCase(data?.cognome)

                        this.email = data?.email != "" ? data?.email : null
                        this.universityEmail = data?.emailAte != "" ? data?.emailAte : null
                        this.mobile = data?.cellulare != "" ? data?.cellulare : null
                        this.address = this.setAddress(data) != "" ? this.setAddress(data) : null
                    })

                    api.photo().then(data => {
                        store.setProfilePic(data)
                        this.profilePic = data
                        f7.emit('photoApiDone')
                    })

                    // Nested to avoid UI glitch with skeleton
                    api.bookletVotesAvg().then(bookletData => {
                        api.bookletStats().then(statsData => {
                            this.totalCfu = statsData?.umPesoConvalidato
                            this.weightedAvg = (bookletData.filter(d => d.base == 30  && d.tipoMediaCod.value == 'P'))[0]?.media

                            resolve(true)
                        })
                    })   
                })
                
            },
            setAddress(data){
                let address = ""

                address = data?.comuResDes + ", " + utils.general.toProperCase(data?.viaRes) + " " + data?.numCivRes
                return address
            },
            async refresh(done) {
                await this.loadData()
                done()
            }
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
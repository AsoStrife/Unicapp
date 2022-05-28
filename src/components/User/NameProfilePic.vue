<template>

    <f7-card>
        <f7-card-header></f7-card-header>
        <f7-card-content>
            <div :class="this.skeletonProfilePic">
                <img :src="this.profilePic" class="img-circle profile-img" />
            </div>

            <h1> 
                <span :class="this.skeletonName" class="mr-1">
                    {{this.firstName}}
                </span>
                
                <span :class="this.skeletonName">
                    {{this.lastName}}
                </span>
            </h1>
            <h2>
                <span :class="this.skeletonId">
                    {{id}}
                </span>
            </h2>
        </f7-card-content>
    </f7-card>
    
</template>

<style scoped>
    .card-header {
        height: 10vw;
        background-color: #4776e6;
        background-position: center;
        color: #fff;
        height: 80px;
    }

    h1 {
        color: #8e8e93;
        font-size: 25px;
        font-weight: normal;
        text-align: center;
        line-height: 13px;
    }

     h2 {
        color: #8e8e93;
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        line-height: 13px;
    }

     .profile-img {
        width: 100px;
        height: 100px;
        border: 5px solid whitesmoke;
        margin-top: -80px;
        display: block;
        z-index: 20;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-size: cover;
        background-position: center;
    }

    img {
        z-index: 1000 !important;
    }
</style>
<script>
    import { f7ready, f7 } from 'framework7-vue';
    import constants from '../../js/unicapp/constants'
    import utils from '../../js/unicapp/utils'
    import store from '../../js/unicapp/store'

    export default {
        name: "NameProfilePic",
        data() {
            return {
                skeletonName: "skeleton-text skeleton-effect-wave",
                skeletonId: "skeleton-text skeleton-effect-wave",
                skeletonProfilePic: "skeleton-text skeleton-effect-wave",

                profilePic: constants.defaultValues.profilePic,
                firstName: constants.defaultValues.firstName, 
                lastName: constants.defaultValues.lastName, 
                id: constants.defaultValues.id,
                defaultValues: constants.defaultValues,
                selectedCareer: store.getSelectedCareer()
            }
        },
        methods: {
            

        },
        mounted() {
            f7ready(() => {
                f7.on('apiPeopleDone', (data) => {
                    this.firstName = utils.toProperCase(data?.nome)
                    this.lastName = utils.toProperCase(data?.cognome)
                })

                f7.on('apiPhotoDone', (data) => {
                    this.profilePic = data
                })
                
                this.id = this.selectedCareer?.matricola
            })


            this.$watch(
                (vm) => [vm.firstName, vm.lastName, vm.id, vm.profilePic],
                (val) => {
                    if(this.firstName != this.defaultValues.firstName && this.lastName != this.defaultValues.lastName)
                        this.skeletonName = ""

                    if(this.id != this.defaultValues.id)
                        this.skeletonId = ""

                    if(this.profilePic != this.defaultValues.profilePic)
                        this.skeletonProfilePic = ""
                },
                {
                    immediate: true,
                    deep: true,
                }
            )

        
            
        },
        setup() {

        }
    }
</script>
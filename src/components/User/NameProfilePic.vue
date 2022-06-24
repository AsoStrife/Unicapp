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
        font-size: 25px;
        font-weight: 300;
        text-align: center;
        line-height: 13px;
    }

     h2 {
        font-size: 20px;
        font-weight: 100;
        text-align: center;
        line-height: 13px;
    }

     .profile-img {
        width: 100px;
        height: 100px;
        border: 3px solid whitesmoke;
        margin-top: -80px;
        display: block;
        z-index: 1;
        position: sticky;
        margin-left: auto;
        margin-right: auto;
        background-size: cover;
        background-position: center;
    }

    img {
        z-index: 10 !important;
    }

    
</style>
<script>
    import { f7ready, f7 } from 'framework7-vue';
    import constants from '../../js/unicapp/constants'
    import store from '../../js/unicapp/store'

    export default {
        name: "NameProfilePic",
        props: {
            profilePic: {
                default: constants.defaultValues.profilePic
            },
            firstName: {
                default: constants.defaultValues.firstName
            },
            lastName: {
                default: constants.defaultValues.lastName
            }
        },
        data() {
            return {
                skeletonName: "skeleton-text skeleton-effect-wave",
                skeletonId: "skeleton-text skeleton-effect-wave",
                skeletonProfilePic: "skeleton-text skeleton-effect-wave",
                
                defaultValues: constants.defaultValues,
                selectedCareer: store.getSelectedCareer(),
                id: constants.defaultValues.id
            }
        },
        methods: {
            

        },
        mounted() {
            f7ready(() => {                
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

        
            
        }
    }
</script>
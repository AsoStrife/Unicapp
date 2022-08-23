<template>

    <f7-card>
        <f7-card-header class="bg-primary"></f7-card-header>
        <f7-card-content>
            <f7-row>
                
                <f7-col width="30">
                    <div :class="this.skeletonProfilePic">
                        <div class="img-circle profile-img"
                            :style="backgroundStyle">
                        </div>
                        
                    </div>
                </f7-col>

                <f7-col width="70">
                    <div class="name-container">
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
                    </div>
                </f7-col>
            </f7-row>
            

            
        </f7-card-content>
    </f7-card>
    
</template>

<style scoped>
    .card-header {
        background-color: #4776e6;
        background-position: center;
        color: #fff;
        height: 30px;
    }

    h1 {
        font-size: 25px;
        font-weight: 300;
        line-height: 30px;
    }

     h2 {
        font-size: 20px;
        font-weight: 100;
        line-height: 13px;
    }

    .name-container{
        margin-left: 10%;
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
                id: constants.defaultValues.id,
                backgroundStyle: `background-image: url(${this.profilePic})`
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
                        this.backgroundStyle = `background-image: url(${this.profilePic})`
                },
                {
                    immediate: true,
                    deep: true,
                }
            )

        
            
        }
    }
</script>
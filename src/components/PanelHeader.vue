<template>

    <div class="div-header">
        <div v-if="this.user">
            <div class="img-circle profile-img" v-if="this.profilePic"
                :style="backgroundStyle">
            </div>

            <h1>{{this.user?.firstName}} {{this.user?.lastName}}</h1>

            <h2>{{this.selectedUniversity?.description}}</h2>
            <h3 v-if="this.selectedCareer?.matricola">{{$t('message.panelHeader.stuID')}}: {{this.selectedCareer?.matricola}}</h3>
        </div>
    </div>
</template>

<style scoped>

    .div-header {
        background-color: #4776e6; 
        padding: 20px;
        
    }
    .ios .div-header {
        /* Handle overlay on status bar */
        padding-top: 70px;
    }
    h1, h2, h3 {
        color: #FFF;
        margin-bottom: 0;
        margin-top:0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }

    h1{
        font-size: 18px;
        font-weight: 700;
        margin-top: 8px;
    }

    h2 {
        font-size: 14px;
        font-weight: 400;
    }

    h3 {
        font-size: 10px;
        font-weight: 400;
    }
    .profile-img {
        width: 35%;
        border: 2px solid whitesmoke;
        display: block;
        z-index: 20;
        margin-right: auto;
    }

    img {
        z-index: 1000 !important;
    }

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import constants from '../js/unicapp/constants'
    import store from '../js/unicapp/store'

    export default {
        name: "PanelHeader",
        data() {
            return {
                profilePic: store.getProfilePic(),
                user: store.getUser(),
                selectedCareer: store.getSelectedCareer(),
                selectedUniversity: store.getSelectedUniversity(),
                backgroundStyle: ``

            }
        },
        methods: {
            setValues() {
                this.profilePic = store.getProfilePic()
                this.user = store.getUser()
                this.selectedCareer = store.getSelectedCareer()
                this.selectedUniversity = store.getSelectedUniversity()
                this.backgroundStyle = `background-image: url(${this.profilePic})`
            }
        },
        mounted() {
            f7ready(() => {
                this.backgroundStyle = `background-image: url(${this.profilePic})`

                f7.on('login', (data) => {
                    this.setValues()
                })

                f7.on('selectedCareer', (data) => {
                    this.setValues()
                })

                f7.on('photoApiDone', (data) => {
                    this.setValues()
                })

                f7.on('logout', (data) => {
                    this.setValues()
                })
            })
        },
        components: { 

        }
    }
</script>
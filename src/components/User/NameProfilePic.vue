<template>

    <f7-card>
        <f7-card-header></f7-card-header>
        <f7-card-content>
            <img src="https://andreacorriga.com/img/profile/andrea-corriga-asostrife-profile-image.png" class="img-circle profile-img" />
            
            <h1> 
                <span :class="this.firstName == this.defaultValues.firstName ? this.skeleton : ''">
                    {{this.firstName}} 
                </span> 
                <span :class="this.lastName == this.defaultValues.lastName ? this.skeleton : ''">{{this.lastName}}</span>
            </h1>
            <h2><span :class="id == this.defaultValues.id ? this.skeleton : ''">{{id}}</span></h2>

            {{this.propsFirstName}}
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

    export default {
        name: "NameProfilePic", 
        props: {
            propsFirstName: {
                default: null
            },
            propsLastName: {
                default: null
            }
        },
        data() {
            return {
                skeleton: "", //"skeleton-text skeleton-effect-wave",
                profilePic: constants.defaultValues.profilePic,
                firstName: this.propsfirstName ? this.propsfirstName : constants.defaultValues.firstName, 
                lastName: constants.defaultValues.lastName, 
                id: constants.defaultValues.id,
                defaultValues: constants.defaultValues
            }
        },
        methods: {
            

        },
        mounted() {
            f7ready(() => {
                console.log(this.defaultValues.firstName)
                console.log(this.firstName)
                console.log(this.firstName == this.defaultValues.firstName)
                console.log(this.skeleton)

                f7.on('CHANGEVALUES', () => {
                    console.log("cambiati")
                })

                this.$emit('ssss')
            })

            
        },
        setup() {

        }
    }
</script>
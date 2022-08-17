<template>
    <f7-card class="mt-0">
        <f7-card-header :padding="false">{{$t('message.personalData.personalInfo')}}</f7-card-header>
        <f7-card-content :padding="false">
            <f7-list :class="skeleton">    
                <f7-list-item :title="this.email" v-if="this.email != null">
                    <template #media>
                        <f7-icon md="material:contact_mail" ios="f7:envelope"></f7-icon>
                    </template>
                </f7-list-item>
                <f7-list-item :title="this.universityEmail" v-if="this.universityEmail != null">
                    <template #media>
                        <f7-icon md="material:email" ios="f7:envelope"></f7-icon>
                    </template>
                </f7-list-item>
                <f7-list-item :title="this.mobile" v-if="this.mobile != null">
                    <template #media>
                        <f7-icon md="material:smartphone" ios="f7:device_phone_portrait"></f7-icon>
                    </template>
                </f7-list-item>
                <f7-list-item :title="this.address" v-if="this.address != null">
                    <template #media>
                        <f7-icon md="material:work" ios="f7:briefcase"></f7-icon>
                    </template>
                </f7-list-item>
            </f7-list>
        </f7-card-content>
    </f7-card>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import constants from '../../js/unicapp/constants'

    export default {
        name: "PersonalData", 
        props: {
            email: {
                default: constants.defaultValues.email
            },
            universityEmail: {
                default: constants.defaultValues.email
            }, 
            mobile: {
                default: constants.defaultValues.mobile
            },
            address: {
                default: constants.defaultValues.address
            } 
        },
        data() {
            return {
                skeleton: "skeleton-text skeleton-effect-wave"
            }
        },
        mounted() {
            f7ready(() => {

                this.$watch(
                (vm) => [vm.email, vm.universityEmail, vm.mobile, vm.address],
                (val) => {
                    if(this.email != constants.defaultValues.email ||
                        this.universityEmail != constants.defaultValues.email ||
                        this.mobile != constants.defaultValues.mobile ||
                        this.address != constants.defaultValues.address)
                        this.skeleton = ""
                },
                {
                    immediate: true,
                    deep: true,
                }
            )
            })
        }
    }
</script>
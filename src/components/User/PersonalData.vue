<template>
    <f7-card class="mt-0">
        <f7-card-header :padding="false">{{$t('message.personalData.personalInfo')}}</f7-card-header>
        <f7-card-content :padding="false">
            <f7-list>    
                <f7-list-item title="me@andreacorriga.com">
                    <template #media>
                        <f7-icon md="material:contact_mail" ios="f7:envelope"></f7-icon>
                    </template>
                </f7-list-item>
                <f7-list-item title="andrea.corriga@unica.it">
                    <template #media>
                        <f7-icon md="material:email" ios="f7:envelope"></f7-icon>
                    </template>
                </f7-list-item>
                <f7-list-item title="3456229455">
                    <template #media>
                        <f7-icon md="material:smartphone" ios="f7:device_phone_portrait"></f7-icon>
                    </template>
                </f7-list-item>
                <f7-list-item title="Cess. cons. titolo">
                    <template #media>
                        <f7-icon md="material:work" ios="f7:briefcase"></f7-icon>
                    </template>
                </f7-list-item>
            </f7-list>
        </f7-card-content>
    </f7-card>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    export default {
        name: "PersonalData", 
        props: {
        },
        data() {
            return {
            }
        },
        methods: {
            
        },
        mounted() {
            f7ready(() => {
                
            })
        }
    }
</script>
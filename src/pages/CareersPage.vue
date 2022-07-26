<template>
    
    <f7-page name="CareersPage" :page-content="false">
        
        <Navbar />
        
        <f7-page-content>
            <f7-block-title>{{$t('message.careers.title')}}:</f7-block-title>
        
            <f7-list media-list>
                <f7-list-item v-for="career in careers" :key="career.stuId"
                    link="#"
                    :title="career.cdsDes"
                    :subtitle="$t('message.careers.status') + ': ' + career.staStuDes + ', ' + career.motStastuDes"
                    :text="$t('message.careers.stuID') + ' ' + career.matricola"
                    @click="selectCareer(career)"
                >
                </f7-list-item>
            </f7-list>
        </f7-page-content>
        
    </f7-page>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import store from '../js/unicapp/store'
    import utils from '../js/unicapp/utils'

    export default {
        name: "CareersPage",
        data() {
            return {
                careers: store.getCareers().map(career => {
                    career.cdsDes = utils.general.toProperCase(career.cdsDes)
                    return career
                })
            };
        },
        methods: {
            selectCareer(career) {
                store.setSelectedCareer(career)
                
                f7.views.main.router.navigate('/home/')
                f7.emit('selectedCareer')
            }
        },
        props: {
        },
        mounted() {
            var self = this

            f7ready(() => {
                self.$firebase.setCurrentScreen("CareersPage")
            })
        },
        components: { 
            Navbar
        }
    }
</script>
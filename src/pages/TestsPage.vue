<template>
    
    <f7-page name="TestsPage" :page-content="false">    

        <Navbar />

        <f7-page-content ptr @ptr:refresh="refresh" >
            <f7-block-title>{{$t('message.tests.title')}}</f7-block-title>
        
            <SkeletonListCustom v-if="skeleton" />

            <f7-block class="mt-0 mb-0" v-if="this.isEmpty">
                <Alert :text="$t('message.tests.noTests')" bg="bg-warning" :showIcon="false"/>
            </f7-block>

            <div class="list media-list" v-if="this.exams.length > 0">
                <ul>
                    <li v-for="(item, key) in this.exams" :key="key">
                        <a @click="this.f7router.navigate('/test/', {props: {exam: item}})" class="item-link item-content">
                            <div class="item-media">
                                <h3 class="text-success" v-html="this.utils.exam.getStatus(item)"></h3>
                            </div>
                            <div class="item-inner">
                                <div class="item-title">{{item.adDes}}</div>
                                <div class="item-text">
                                    {{$t('message.tests.professorName')}}: {{this.utils.general.toProperCase(item?.presidenteNome)}}  {{utils.general.toProperCase(item?.presidenteCognome)}}
                                    <br />
                                    {{$t('message.tests.esamDate')}}: {{this.utils.general.removeTimeFromString(item?.dataInizioApp)}}
                                    
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </f7-page-content>

    </f7-page>
</template>

<style scoped>
    h3 {
        font-size: 25px !important;
        
    }
    
    .list .item-title {
        word-wrap: normal;
        overflow: visible;
        white-space: normal;
        font-size: 15px !important;
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import SkeletonListCustom from '../components/SkeletonListCustom.vue'
    import api from '../js/unicapp/api'
    import utils from '../js/unicapp/utils'
    import Alert from '../components/Alert.vue'

    export default {
        name: "TestsPage",
        props: {
            f7router: Object,
        },
        data() {
            return {
                exams: [],
                skeleton: true,
                isEmpty: false,
                utils: utils
            }
        },
        methods: {
            loadData(){
                self = this
                api.tests().then(response => {
                    this.exams = response
                    this.skeleton = false

                    if(this.exams.length == 0)
                        this.isEmpty = true
                    else
                        // Sort per ordine alfabetico + data appello
                        this.exams = response.sort((a, b) => a.adDes.localeCompare(b.adDes) && a.dataInizioApp.localeCompare(b.dataInizioApp))

                })   
                .catch(e => {
                    self.$errorHandling.handle(e, self.$i18n)
                })                 
            
            },
            async refresh(done) {
                await this.loadData()
                done()
            }
        },
        mounted() {
            var self = this
            
            f7ready(() => {
                self.$firebase.setCurrentScreen("TestsPage")
                this.loadData()
            })
        },
        components: { 
            Navbar,
            SkeletonListCustom,
            Alert
        }
    }
</script>
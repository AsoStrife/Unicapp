<template>
    
    <f7-page name="BookletPage" :page-content="false">
        
        <Navbar />

        <f7-page-content ptr @ptr:refresh="refresh">

            <f7-block-title>{{$t('message.booklet.title')}}</f7-block-title>
            
            <SkeletonListCustom v-if="skeleton" />
            
            <f7-block class="mt-0 mb-0" v-if="this.isEmpty">
                <Alert :text="$t('message.booklet.noExams')" bg="bg-warning" :showIcon="false"/>
            </f7-block>
            
            <div class="list" v-if="this.exams.length > 0">
                <ul>
                    <li v-for="(item, key) in this.exams" :key="key">
                        <a @click="this.f7router.navigate('/booklet_exam/', {props: {exam: item}})" class="item-link item-content">
                            <div class="item-media">
                                <h3 class="text-success" v-html="this.utils.exam.getGrade(item)"></h3>                          
                            </div>
                            <div class="item-inner">
                                <div class="item-title">{{this.utils.general.toProperCase(item.adDes)}}</div>
                                <div class="item-after">{{item.peso}} {{$t('message.booklet.cfu')}}</div>
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
    import Alert from '../components/Alert.vue'
    import api from '../js/unicapp/api'
    import utils from '../js/unicapp/utils'

    export default {
        name: "BookletPage",
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
            loadData() {
                return new Promise( (resolve, reject) => {
                    api.booklet().then(response => {
                        this.exams = response
                        this.skeleton = false

                        if(this.exams.length == 0)
                            this.isEmpty = true

                        resolve(true)
                    })
                    .catch(e => {
                        this.$errorHandling.handle(e)
                    })
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
                self.$firebase.setCurrentScreen("BookletPage")

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
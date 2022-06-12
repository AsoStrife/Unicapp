<template>
    <f7-page name="Booklet">
        <Navbar />

        <f7-block-title>{{$t('message.tests.title')}}</f7-block-title>
        
        <SkeletonListCustom v-if="skeleton" />

        <div class="list">
            <ul>
                <li v-for="(item, key) in this.exams" :key="key">
                    <a @click="this.f7router.navigate('/test/', {props: {exam: item}})" class="item-link item-content">
                        <div class="item-media">
                            <h3 class="text-success" v-html="this.getStatus(item)"></h3>
                        </div>
                        <div class="item-inner">
                            <div class="item-title">{{item.adDes}}</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </f7-page>
</template>

<style>
    h3 {
        font-size: 30px;
        
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import SkeletonListCustom from '../components/SkeletonListCustom.vue'
    import api from '../js/unicapp/api'
    import utils from '../js/unicapp/utils'
    import constants from '../js/unicapp/constants'

    export default {
        name: "TestsPage",
        props: {
            f7router: Object,
        },
        data() {
            return {
                exams: [],
                skeleton: true,
            };
        },
        methods: {
            getStatus(exam){
                return exam.statoDes == 'Prenotazioni Aperte' ? constants.emoji.greenCirle : constants.emoji.redCirle;
            }
            
        },
        mounted() {
            f7ready(() => {
                api.tests().then(response => {
                    this.skeleton = ''

                    // Sort per ordine alfabetico + data appello
                    this.exams = response.sort((a, b) => a.adDes.localeCompare(b.adDes) && a.dataInizioApp.localeCompare(b.dataInizioApp))
                })
            });
        },
        components: { 
            Navbar,
            SkeletonListCustom
        }
    }
</script>
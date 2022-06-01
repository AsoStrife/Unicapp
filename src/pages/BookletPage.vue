<template>
    <f7-page name="Booklet">
        <Navbar />

        <f7-block-title>{{$t('message.booklet.title')}}</f7-block-title>
        
        <SkeletonListCustom v-if="skeleton" />

        <div class="list">
            <ul>
                <li v-for="(item, key) in this.exams" :key="key">
                    <a @click="this.f7router.navigate('/booklet_exam/', {props: {exam: item}})" class="item-link item-content">
                        <div class="item-media">
                            <h3 class="text-success" v-html="this.getGrade(item)"></h3>
                        </div>
                        <div class="item-inner">
                            <div class="item-title">{{item.adDes}}</div>
                            <div class="item-after">{{item.peso}} {{$t('message.booklet.cfu')}}</div>
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
        name: "Booklet",
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
            getGrade(exam){
                
                if(exam?.esito?.voto != null)
                    return exam.esito.voto + (exam.esito.lodeFlg == 1 ? constants.booklet.laudeSymbol : "")
                
                if(exam?.esito?.tipoGiudCod != "")
                    return exam.esito.tipoGiudCod

                return constants.emoji.redCirle
            }
            
        },
        mounted() {
            f7ready(() => {
                api.booklet().then(response => {
                    this.exams = response
                    this.skeleton = ''
                })
            });
        },
        components: { 
            Navbar,
            SkeletonListCustom
        }
    }
</script>
<template>
    <f7-page name="Taxes">
        <Navbar />
        
        <f7-block-title>{{$t('message.taxes.title')}}</f7-block-title>

        <SkeletonListCustom v-if="skeleton" />

        <div class="list">
            <ul>
                <li v-for="(item, key) in this.taxes" :key="key">
                    <a @click="this.f7router.navigate('/tax/', {props: {tax: item}})" class="item-link item-content">
                        <div class="item-media">
                            <h3 class="text-success" v-html="this.getStatus(item)"></h3>
                        </div>
                        <div class="item-inner">
                            <div class="item-title">{{item.tassaDes}} {{item.combDes}}</div>
                            <div class="item-after">{{item.importoVoce}} {{$t('message.general.euro')}}</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

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
    import constants from '../js/unicapp/constants'

    export default {
        name: "Taxes",
        props: {
            f7router: Object,
        },
        data() {
            return {
                taxes: [],
                skeleton: true,
            };
        },
        methods: {
            getStatus(tax){
                switch(tax?.semaforo){
                    case constants.taxes.greenLight: 
                        return constants.emoji.greenCirle
                    case constants.taxes.redLight: 
                        return constants.emoji.redCirle
                }
            }
        },
        mounted() {
            f7ready(() => {
                api.taxes().then(response => {
                    this.taxes = response
                    this.skeleton = false
                })
            });
        },
        components: { 
            Navbar,
            SkeletonListCustom
        }
    }
</script>
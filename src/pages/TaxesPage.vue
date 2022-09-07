<template>

    <f7-page name="TaxesPage" :page-content="false">

        <Navbar />

        <f7-page-content ptr @ptr:refresh="refresh">
            <f7-block-title>{{$t('message.taxes.title')}}</f7-block-title>

            <SkeletonListCustom v-if="skeleton" />

            <f7-block class="mt-0 mb-0" v-if="this.isEmpty">
                <Alert :text="$t('message.taxes.noTaxes')" bg="bg-warning" :showIcon="false"/>
            </f7-block>
            
            <div class="list" v-if="this.taxes.length > 0">
                <ul>
                    <li v-for="(tax, key) in this.taxes" :key="key">
                        <a @click="this.f7router.navigate('/tax/', {props: {tax: tax}})" class="item-link item-content">
                            <div class="item-media">
                                <h3 class="text-success" v-html="this.utils.tax.getStatus(tax)"></h3>
                            </div>
                            <div class="item-inner">
                                <div class="item-title">{{tax.tassaDes}} {{tax.combDes}}</div>
                                <div class="item-after">{{tax?.importoVoce}}{{$t('message.general.euro')}}</div>
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
        name: "TaxesPages",
        props: {
            f7router: Object,
        },
        data() {
            return {
                taxes: [],
                skeleton: true,
                isEmpty: false,
                utils: utils
            };
        },
        methods: {
            loadData(){
                return new Promise( (resolve, reject) => {
                    api.taxes().then(response => {
                        console.log(response)
                        this.taxes = response.filter(tax => tax.fattId != 0)
                        this.skeleton = false

                        if(this.taxes.length == 0)
                            this.isEmpty = true

                        resolve(true)
                    })
                    .catch(e => {
                        self.$errorHandling.handle(e)
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
                self.$firebase.setCurrentScreen("TaxesPages")

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
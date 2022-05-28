<template>
    <f7-page name="Taxes">
        <Navbar />
        
        <f7-block-title>{{$t('message.taxes.title')}}</f7-block-title>
        <div class="list">
            <ul>
                <li v-for="(item, key) in this.taxes" :key="key">
                    <a href="#" class="item-link item-content">
                        <div class="item-media">
                            <h3 class="text-success" v-html="this.getStatus(item)"></h3>
                        </div>
                        <div class="item-inner">
                            <div class="item-title">{{item.tassaDes}} {{item.combDes}}</div>
                            <div class="item-after">{{item.importoVoce}} {{$t('message.taxes.euro')}}</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </f7-page>
</template>

<style>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';
    import api from '../js/unicapp/api'
    import utils from '../js/unicapp/utils'
    import constants from '../js/unicapp/constants'

    export default {
        name: "Taxes",
        data() {
            return {
                taxes: []
            };
        },
        methods: {
            getStatus(tax){
                switch(tax?.semaforo){
                    case constants.taxes.greenLight: 
                        return constants.emoji.greenCirle
                }
            }
        },
        mounted() {
            f7ready(() => {
                api.taxes().then(response => {
                    console.log(response)
                    this.taxes = response
                })
            });
        },
        components: { 
            Navbar
        }
    }
</script>
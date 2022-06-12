<template>
    <f7-page name="Taxes">
        <Navbar />
        
        <TitleDetailPage :bg="this.getStatus(this.tax)" :text="this.tax.tassaDes + ' - ' + this.tax.combDes" />

    </f7-page>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';
    import TitleDetailPage from '../components/TitleDetailPage.vue'
    import constants from '../js/unicapp/constants'

    export default {
        name: "Tax",
        props: {
            tax: {
                default: {}
            }
        },
        data() {
            return {
                skeleton: "skeleton-text skeleton-effect-wave",
            };
        },
        methods: {
            getStatus(tax){
                switch(tax?.semaforo){
                    case constants.taxes.greenLight: 
                        return 'success'
                    case constants.taxes.redLight: 
                        return 'danger'
                }
            }
        },
        mounted() {
            f7ready(() => {
            });
        },
        components: { 
            Navbar,
            TitleDetailPage
        }
    }
</script>
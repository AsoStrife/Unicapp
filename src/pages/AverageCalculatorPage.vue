<template>
    <f7-page name="AverageCalculator">

        <Navbar />
        
        <f7-block-title>{{$t('message.avgCalculator.title')}}</f7-block-title>

        <f7-fab position="right-bottom" @click="openPopup">
            <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        </f7-fab>

        <Ratings />

        <AddExamCalculator /> 

        <ExamsTableCalculator />

    </f7-page>
</template>

<style>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import AddExamCalculator from '../components/AddExamCalculator.vue'
    import ExamsTableCalculator from '../components/ExamsTableCalculator.vue'
    import Ratings from '../components/User/Ratings.vue'
    import api from '../js/unicapp/api'

    export default {
        name: "AverageCalculator",
        data() {
            return {
                newExams: [], 
                initialmMathAvg: null, 
                initialWeightedAvg: null,
                initialTotalCfu: null
            };
        },
        components: {
            Navbar,
            AddExamCalculator,
            Ratings,
            ExamsTableCalculator,
        },
        methods: {
            openPopup(){
                f7.popup.open('.demo-popup-swipe')
            },
            async loadInitialValues() {
                try{
                    let bookletData = await api.bookletVotesAvg()
                    let statsData = await api.bookletStats()

                    this.initialWeightedAvg = (bookletData.filter(d => d.base == 30  && d.tipoMediaCod.value == 'P'))[0]?.media
                    this.initialTotalCfu = statsData?.umPesoConvalidato

                    f7.emit('updateeBookletVoteAvg', {
                        mathAvg: null, 
                        weightedAvg: this.initialWeightedAvg,
                        totalCfu: this.initialTotalCfu
                    })
                }
                catch(e){
                    f7.toast.create({
                        text: self.$t('message.general.error'),
                        closeTimeout: 3000,
                        destroyOnClose: true,
                        position: 'bottom',
                    }).open()
                }
            }
        },
        mounted() {
            f7ready(async () => {

                await this.loadInitialValues()

                

                f7.on('addExamCalculator', function(data){
                    console.log(data)
                })
            });
        } 
        
    }
</script>
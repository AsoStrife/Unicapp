<template>
    <f7-page name="AverageCalculator">

        <Navbar />
        
        <f7-block-title>{{$t('message.avgCalculator.title')}}</f7-block-title>

        <f7-fab position="right-bottom" @click="openPopup">
            <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        </f7-fab>

        <Ratings :textColor="textColor" :weightedAvg="initialWeightedAvg" :totalCfu="initialTotalCfu"/>

        <AddExamCalculator /> 

        <ExamsTableCalculator/>

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
    import constants from '../js/unicapp/constants'

    export default {
        name: "AverageCalculator",
        data() {
            return {
                newExams: [], 
                initialWeightedAvg: constants.defaultValues.weightedAvg,
                initialTotalCfu: constants.defaultValues.totalCfu,
                textColor: ""
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

                    f7.emit('updateBookletVoteAvg', {
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
            },
            calculateNewAvg() {
                let newTotalCfu = parseInt(this.initialTotalCfu) + this.newExams.reduce(function (acc, e) { return acc + parseInt(e.examCfu) }, 0)
                let newExamsWeightedSum = this.newExams.reduce(function (acc, e) { return acc + (parseInt(e.examCfu) * parseInt(e.examGrade)) }, 0)
                let initialExamWeightedSum = this.initialWeightedAvg * this.initialTotalCfu

                let newWeithedAvg = (initialExamWeightedSum + newExamsWeightedSum) / newTotalCfu

                f7.emit('updateBookletVoteAvg', {
                    mathAvg: null, 
                    weightedAvg: newWeithedAvg,
                    totalCfu: newTotalCfu
                })
                
                this.textColor = newWeithedAvg > this.initialWeightedAvg ? "text-success" : "text-danger"
                console.log("initial", this.initialWeightedAvg)
                console.log("new", newWeithedAvg)
            }
        },
        mounted() {
            var self = this

            f7ready(async () => {
                await this.loadInitialValues()

                f7.on('addExamCalculator', function(data){
                    self.newExams.push(data)

                    self.calculateNewAvg()
                })
            });
        } 
        
    }
</script>
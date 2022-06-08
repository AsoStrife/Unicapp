<template>
    <f7-page name="AverageCalculator">

        <Navbar />
        
        <f7-block-title>{{$t('message.avgCalculator.title')}}</f7-block-title>

        <f7-fab position="right-bottom" @click="openPopup" v-if="isFabVisible">
            <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        </f7-fab>

        <Ratings :textColor="textColor" :weightedAvg="newWeithedAvg" :totalCfu="newTotalCfu"/>

        <AddExamCalculator /> 

        <ExamsTableCalculator :exams="newExams"/>

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
                newWeithedAvg: constants.defaultValues.weightedAvg,
                newTotalCfu: constants.defaultValues.totalCfu,
                initialWeightedAvg: constants.defaultValues.weightedAvg,
                initialTotalCfu: constants.defaultValues.totalCfu,
                textColor: "",
                isFabVisible: false
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

                    this.newWeithedAvg = this.initialWeightedAvg
                    this.newTotalCfu = this.initialTotalCfu
                    this.isFabVisible = true
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
                this.newTotalCfu = parseInt(this.initialTotalCfu) + this.newExams.reduce(function (acc, e) { return acc + parseInt(e.examCfu) }, 0)
                let newExamsWeightedSum = this.newExams.reduce(function (acc, e) { return acc + (parseInt(e.examCfu) * parseInt(e.examGrade)) }, 0)
                let initialExamWeightedSum = this.initialWeightedAvg * this.initialTotalCfu

                this.newWeithedAvg = (initialExamWeightedSum + newExamsWeightedSum) / this.newTotalCfu

                f7.emit('updateBookletVoteAvg', {
                    mathAvg: null, 
                    weightedAvg: this.newWeithedAvg,
                    totalCfu: this.newTotalCfu
                })
                
                console.log("initial", this.initialWeightedAvg)
                console.log("new", this.newWeithedAvg)

                this.textColor = this.newWeithedAvg > this.initialWeightedAvg ? "text-success" : (this.newWeithedAvg < this.initialWeightedAvg ? "text-danger" : "")
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

                f7.on('deleteExamFromCalulator', function(data) {
                    self.newExams.splice(data, 1)
                    self.calculateNewAvg()
                })

                f7.on('deleteAllExamFromCalulator', function() {
                    self.newExams = []
                    self.calculateNewAvg()
                })
            });
        } 
        
    }
</script>
<template>

    <div class="card data-table data-table-collapsible data-table-init" id="data-table-exams-calculator" v-if="exams.length > 0">
        <div class="card-header">
            <div class="data-table-title">{{$t('message.examsTableCalculator.exams')}}</div>
            <div class="data-table-actions">
                <a class="link icon-only" @click="deleteExams">
                    <i class="icon f7-icons if-not-md">trash</i>
                    <i class="icon material-icons md-only">delete</i>
                </a>
            </div>
        </div>

        <div class="card-content">
            <table>
                <thead>
                    <tr>
                        <th class="label-cell">{{$t('message.examsTableCalculator.exam')}}</th>
                        <th class="numeric-cell">{{$t('message.examsTableCalculator.grade')}}</th>
                        <th class="numeric-cell">{{$t('message.examsTableCalculator.cfu')}}</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="(exam, index)  in exams" :key="index" @click="deleteExam(index)">
                        <td class="label-cell">{{exam.examName}}</td>
                        <td class="numeric-cell">{{exam.examGrade}}</td>
                        <td class="numeric-cell">{{exam.examCfu}}</td>
                    </tr>

                </tbody>
            </table>
        </div> <!-- card-content -->
    </div>

</template>

<style scoped>
    .data-table.data-table-collapsible td {
         min-height: 30px;
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import constants from '../js/unicapp/constants'

    export default {
        name: "ExamsTableCalculator",
        props: {
            exams: {
                default: [], 
                type: Array
            }
        },
        data() {
            return {

            }
        },
        methods: {
            deleteExams() {
                f7.dialog.confirm(
                    this.$t('message.examsTableCalculator.clearAllExamsQuestion'), function () {
                    f7.emit('deleteAllExamFromCalulator')
                })
            },
            deleteExam(index){
                f7.dialog.confirm(
                    this.$t('message.examsTableCalculator.clearExamQuestion'), function () {
                    f7.emit('deleteExamFromCalulator', index)
                })
            }
        },
        mounted() {
            var self = this

            f7ready(() => {
                
                /*
                f7.on('addExamCalculator', function(data){
                    self.exams.push(data)

                    f7.dataTable.destroy("#data-table-exams-calculator")

                    f7.dataTable.create({
                        el: "#data-table-exams-calculator"
                     })
                })*/
            })

        },
        
    }
</script>
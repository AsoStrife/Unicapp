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
                <tbody>
 
                    <tr v-for="(exam, index)  in exams" :key="index" @click="deleteExam(index)">
                        <td class="label-cell" :data-collapsible-title="$t('message.examsTableCalculator.exam')">{{exam.examName}}</td>
                        <td class="numeric-cell" :data-collapsible-title="$t('message.examsTableCalculator.grade')">{{exam.examGrade}}</td>
                        <td class="numeric-cell" :data-collapsible-title="$t('message.examsTableCalculator.cfu')">{{exam.examCfu}}</td>
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
                f7.dialog.create({
                    text: this.$t('message.examsTableCalculator.clearAllExamsQuestion'),
                    buttons: [
                        {
                            text: this.$t('message.general.cancel'), 
                            onClick: function() {
                            }
                        },
                        {
                            text: this.$t('message.general.confirm'), 
                            onClick: function() {
                                f7.emit('deleteAllExamFromCalulator')
                            }
                        },
                    ]
                }).open()

            },
            deleteExam(index){
                f7.dialog.create({
                    text: this.$t('message.examsTableCalculator.clearExamQuestion'),
                    buttons: [
                        {
                            text: this.$t('message.general.cancel'), 
                            onClick: function() {
                            }
                        },
                        {
                            text: this.$t('message.general.confirm'), 
                            onClick: function() {
                                f7.emit('deleteExamFromCalulator', index)
                            }
                        },
                    ]
                }).open() 
            }
        },
        mounted() {
            var self = this

            f7ready(() => {
                
            })

        },
        
    }
</script>
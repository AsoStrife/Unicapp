<template>

    <div class="card data-table data-table-collapsible data-table-init">
        <div class="card-header">
            <div class="data-table-title">{{$t('message.examsTableCalculator.exams')}}</div>
            <div class="data-table-actions">
                <a class="link icon-only">
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
                    
                    <tr v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i">
                        <td class="label-cell">Sistemi operativi</td>
                        <td class="numeric-cell">28</td>
                        <td class="numeric-cell">6</td>
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
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        mounted() {
            f7ready(() => {
                
                
            })

        },
        
    }
</script>
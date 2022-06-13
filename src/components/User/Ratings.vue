<template>
    <f7-block class="mt-0 mb-0">
        <f7-row>
            <f7-col v-if="weightedAvg != null">
                <f7-card :class="skeleton">
                    <f7-card-header>{{$t('message.ratings.weightedAvg')}}</f7-card-header>
                    <f7-card-content :class="textColor">{{weightedAvg != defaultValues.weightedAvg ? weightedAvg.toFixed(2) : defaultValues.weightedAvg}}</f7-card-content>
                </f7-card>
            </f7-col>
            <f7-col v-if="totalCfu != null">
                <f7-card :class="skeleton">
                    <f7-card-header>{{$t('message.ratings.totalCfu')}}</f7-card-header>
                    <f7-card-content :class="textColor">{{totalCfu}}</f7-card-content>
                </f7-card>
            </f7-col>
        </f7-row>
    </f7-block>
</template>

<style scoped>
    .card-header {
        color: #8e8e93 !important;
    }

    p {
        color: #8e8e93;
        font-size: 25px;
        font-weight: normal;
        text-align: center;
        font-weight: 200;
        margin-top: 0;
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import constants from '../../js/unicapp/constants'

    export default {
        name: "Ratings", 
        props: {
            textColor: {
                type: String, 
                default: ""
            },
            weightedAvg: {
                type: Number, 
                default: constants.defaultValues.weightedAvg
            },
            totalCfu: {
                type: Number, 
                default: constants.defaultValues.totalCfu
            }

        },
        data() {
            return {
                skeleton: "skeleton-text skeleton-effect-wave",
                defaultValues: constants.defaultValues
            }
        },
        methods: {
            
        },
        mounted() {
            var self = this

            f7ready(() => {
                
            })

            this.$watch(
                (vm) => [vm.mathAvg, vm.weightedAvg],
                (val) => {
                    if(this.weightedAvg != constants.defaultValues.weightedAvg){
                        this.skeleton = ""
                    }
                },
                {
                    immediate: true,
                    deep: true,
                }
            )
        }
        
    }
</script>
<template>
    <f7-block class="mt-0 mb-0">
        <f7-row>
            <f7-col v-if="initialWeightedAvg != null">
                <f7-card>
                    <f7-card-header>{{$t('message.ratings.weightedAvg')}}</f7-card-header>
                    <f7-card-content :class="skeleton">
                        {{initialWeightedAvg != defaultValues.weightedAvg ? initialWeightedAvg : defaultValues.weightedAvg}}
                        
                        <span v-if="newWeightedAvg != defaultValues.weightedAvg && initialWeightedAvg != newWeightedAvg">
                            <span class="slim"> &rarr; </span>
                            <span :class="textColor">{{newWeightedAvg != defaultValues.weightedAvg ? newWeightedAvg : defaultValues.weightedAvg}}</span>
                        </span>
                        
                    </f7-card-content>
                </f7-card>
            </f7-col>
            <f7-col v-if="initialTotalCfu != null">
                <f7-card>
                    <f7-card-header>{{$t('message.ratings.totalCfu')}}</f7-card-header>
                    <f7-card-content :class="skeleton">
                        {{initialTotalCfu}} 
                        
                        <span v-if="newTotalCfu != defaultValues.totalCfu && initialTotalCfu != newTotalCfu">
                            <span class="slim"> &rarr; </span> {{newTotalCfu}}
                        </span>
                        
                    </f7-card-content>
                </f7-card>
            </f7-col>
        </f7-row>
    </f7-block>
</template>

<style scoped>
    .card-content {
         text-align: center;
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
            initialWeightedAvg: {
                type: Number, 
                default: constants.defaultValues.weightedAvg
            },
            initialTotalCfu: {
                type: Number, 
                default: constants.defaultValues.totalCfu
            },
            newWeightedAvg: {
                type: Number, 
                default: constants.defaultValues.weightedAvg
            },
            newTotalCfu: {
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
                (vm) => [vm.initialWeightedAvg],
                (val) => {
                    if(this.initialWeightedAvg != constants.defaultValues.weightedAvg){
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
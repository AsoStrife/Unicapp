<template>
    <f7-block class="mt-0 mb-0">
        <f7-row>
            <!--<f7-col v-if="mathAvg">
                <f7-card
                    :title="$t('message.ratings.mathAvg')" 
                    :content="mathAvg" 
                    :class="'mt-0 ' + skeleton"></f7-card>
            </f7-col>-->
            <f7-col v-if="weightedAvg">
                <f7-card
                    :title="$t('message.ratings.weightedAvg')" 
                    :content="weightedAvg" 
                    :class="'mt-0 ' + skeleton">
                </f7-card>
            </f7-col>
            <f7-col v-if="totalCfu">
                <f7-card
                    :title="$t('message.ratings.totalCfu')" 
                    :content="totalCfu" 
                    :class="'mt-0 ' + skeleton">
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
        },
        data() {
            return {
                skeleton: "skeleton-text skeleton-effect-wave",
                mathAvg: constants.defaultValues.mathAvg, 
                weightedAvg: constants.defaultValues.weightedAvg,
                totalCfu: constants.defaultValues.totalCfu
            }
        },
        methods: {
            
        },
        mounted() {
            f7ready(() => {
                f7.on('apiBookletVoteAvgDone', (data) => {
                    this.mathAvg = (data.filter(d => d.base == 30  && d.tipoMediaCod.value == 'A'))[0]?.media
                    this.weightedAvg = (data.filter(d => d.base == 30  && d.tipoMediaCod.value == 'P'))[0]?.media
                })

                f7.on('updateeBookletVoteAvg', (data) => {
                    this.mathAvg = data.mathAvg
                    this.weightedAvg = data.weightedAvg
                    this.totalCfu = data.totalCfu
                })
                
            })

            this.$watch(
                (vm) => [vm.mathAvg, vm.weightedAvg],
                (val) => {
                    if(this.mathAvg != constants.defaultValues.mathAvg && this.weightedAvg != constants.defaultValues.weightedAvg)
                        this.skeleton = ""
                },
                {
                    immediate: true,
                    deep: true,
                }
            )
        },
        
    }
</script>
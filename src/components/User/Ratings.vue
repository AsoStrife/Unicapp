<template>
    <f7-block class="mt-0 mb-0">
        <f7-row>
            <f7-col>
                <f7-card :title="$t('message.ratings.mathAvg')" content="26.5" class="mt-0"></f7-card>
            </f7-col>
            <f7-col><f7-card :title="$t('message.ratings.weightedAvg')" content="27.5" class="mt-0"></f7-card></f7-col>
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
    import { f7ready, f7 } from 'framework7-vue';
    export default {
        name: "Ratings", 
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
        }
    }
</script>
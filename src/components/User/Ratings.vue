<template>
    <f7-block class="mt-0 mb-0">
        <f7-row>
            <f7-col>
                <f7-card title="Media Aritmetica" content="26.5" class="mt-0"></f7-card>
            </f7-col>
            <f7-col><f7-card title="Media Ponderata" content="27.5" class="mt-0"></f7-card></f7-col>
        </f7-row>
    </f7-block>
</template>

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
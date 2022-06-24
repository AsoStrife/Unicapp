<template>
    
    <div :class="this.background">
        <f7-row>
            <f7-col>
                <f7-block>
                    <h1>{{utils.toProperCase(this.text)}}</h1>
                </f7-block>
            </f7-col>
        </f7-row>
        
    </div>

</template>

<style scoped>
    h1 {
        color: #FFF; 
        font-size:18px;
        text-align: center;
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import utils from '../js/unicapp/utils'

    export default {
        name: "TitleDetailPage", 
        props: {
            text: String,
            bg: String
        },
        data() {
            return {
                background: "bg-" + this.bg,
                utils: utils
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
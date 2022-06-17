<template>
    
    <div :class="this.background">
        <h1>{{utils.toProperCase(this.text)}}</h1>
    </div>

</template>

<style scoped>
    h1 {
        color: #FFF; 
        font-size:18px;
        text-align: center;
    }

    div {
        width: 100%;
        margin: 0; 
        padding: 10px 0 10px 0;
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
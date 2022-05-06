<template>
    <div :class="this.class">
        <f7-icon :md="this.mdIcon" :ios="this.iosIcon" :aurora="this.auroraIcon" v-if="this.showIcon" class="mr-2"></f7-icon>
        {{this.text}}
    </div>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    export default {
        name: "Alert", 
        props: {
            text: String,
            bg: String,
            ios: String,
            md: String,
            aurora: String,
        },
        data() {
            return {
                class: "alert " + this.bg,
                iosIcon: "f7:" + this.ios,
                mdIcon: "material:" + this.md,
                auroraIcon: "f7:" + this.aurora,
                showIcon: false
            }
        },
        methods: {
            
        },
        mounted() {
            f7ready(() => {
                if(this.ios != "" || this.aurora != "" || this.md != "")
                    this.showIcon = true
            })
        }
    }
</script>
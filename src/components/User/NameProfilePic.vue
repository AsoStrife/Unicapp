<template>
    <f7-card>
        <f7-block>
            <div class="text-align-center">
                <img src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg" class="img-circle" />
            </div>
            <div class="text-align-center ml-3 mt-2">
                <h4>Andrea AsoStrife Corriga</h4>
                <h5>50/60/12345</h5>
            </div>
        </f7-block>
    </f7-card>
</template>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    export default {
        name: "Name", 
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
<template>

    <f7-card>
        <f7-card-header></f7-card-header>
        <f7-card-content>
            <img src="https://andreacorriga.com/img/profile/andrea-corriga-asostrife-profile-image.png" class="img-circle profile-img" />
            
            <h1>Andrea Corriga AsoStrife</h1>
            <h2>50/60/12345</h2>
        </f7-card-content>
    </f7-card>
    
</template>

<style scoped>
    .card-header {
        height: 10vw;
        background-color: #4776e6;
        background-position: center;
        color: #fff;
        height: 80px;
    }

    h1 {
        color: #8e8e93;
        font-size: 25px;
        font-weight: normal;
        text-align: center;
        line-height: 13px;
    }

     h2 {
        color: #8e8e93;
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        line-height: 13px;
    }

     .profile-img {
        width: 100px;
        height: 100px;
        border: 5px solid whitesmoke;
        margin-top: -80px;
        display: block;
        z-index: 20;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-size: cover;
        background-position: center;
    }
</style>
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
<template>
    <f7-page name="home">
        <Navbar />

        <f7-block-title>Il tuo libretto</f7-block-title>
        <div class="list">
            <ul>
                <li v-for="(item, key) in this.exams" :key="key">
                    <a href="#" class="item-link item-content">
                    <div class="item-media">
                        <h3 class="text-success">{{item.cfu}}</h3>
                    </div>
                    <div class="item-inner">
                        <div class="item-title">{{item.name}}</div>
                        <div class="item-after">{{item.cfu}}CFU</div>
                    </div>
                    </a>
                </li>
            </ul>
        </div>

    </f7-page>
</template>

<style>
    h3 {
        font-size: 30px;
        
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';
    import Alert from '../components/Alert.vue';
    import Ratings from '../components/User/Ratings.vue';
    import NameProfilePic from '../components/User/NameProfilePic.vue';
    import PersonalData from '../components/User/PersonalData.vue';

    export default {
        name: "Booklet",
        data() {
            return {
                exams: [
                    {
                        cfu: 6, 
                        name: "Esame 1", 
                        voto: 27
                    },
                    {
                        cfu: 3, 
                        name: "Esame 2", 
                        voto: 25
                    },
                    {
                        cfu: 12, 
                        name: "Esame 3", 
                        voto: 30
                    },
                    {
                        cfu: 9, 
                        name: "Esame 4", 
                        voto: 19
                    },
                    {
                        cfu: 6, 
                        name: "Esame 5", 
                        voto: 29
                    },
                ]
            };
        },
        methods: {},
        mounted() {
            f7ready(() => {
            });
        },
        components: { 
            Navbar,
            Alert,
            NameProfilePic,
            Ratings, 
            PersonalData,
        }
    }
</script>
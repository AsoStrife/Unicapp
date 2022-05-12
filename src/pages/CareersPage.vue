<template>
    <f7-page name="Careers">
        <Navbar />

        <f7-block-title>{{$t('message.careers.title')}}:</f7-block-title>
        <f7-list media-list>
            <f7-list-item v-for="career in careers" :key="career.stuId"
                link="#"
                :title="capitalizeFirstLetter(career.cdsDes)"
                :subtitle="$t('message.careers.status') + ': ' + career.staStuDes + ', ' + career.motStastuDes"
                :text="$t('message.careers.stuID') + ' ' + career.matricola"
            >
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<style>

</style>

<script>
    import { f7ready, f7 } from 'framework7-vue';
    import Navbar from '../components/Navbar.vue';


    export default {
        name: "Careers",
        data() {
            return {
                careers: [
                    {
                        "cdsDes": "MATEMATICA E INFORMATICA",
                        "cdsId": 10755,
                        "matId": 428198,
                        "matricola": "200/1057/65037",
                        "motStastuCod": "TIT",
                        "motStastuDes": "Cons. Titolo",
                        "staMatCod": "A",
                        "staMatDes": "Attivo",
                        "staStuCod": "X",
                        "staStuDes": "Cessato",
                        "stuId": 333712
                    },
                    {
                        "cdsDes": "INFORMATICA",
                        "cdsId": 10670,
                        "matId": 400192,
                        "matricola": "60/73/65088",
                        "motStastuCod": "TIT",
                        "motStastuDes": "Cons. Titolo",
                        "staMatCod": "A",
                        "staMatDes": "Attivo",
                        "staStuCod": "X",
                        "staStuDes": "Cessato",
                        "stuId": 308794
                    },
                    {
                        "cdsDes": "INFORMATICA",
                        "cdsId": 10563,
                        "matId": 377426,
                        "matricola": "60/61/65101",
                        "motStastuCod": "TIT",
                        "motStastuDes": "Cons. Titolo",
                        "staMatCod": "A",
                        "staMatDes": "Attivo",
                        "staStuCod": "X",
                        "staStuDes": "Cessato",
                        "stuId": 289221
                    },
                    {
                        "cdsDes": "CORSI SINGOLI",
                        "cdsId": 10443,
                        "matId": 370845,
                        "matricola": "99/CS/02721",
                        "motStastuCod": "RIN",
                        "motStastuDes": "Rinuncia",
                        "staMatCod": "A",
                        "staMatDes": "Attivo",
                        "staStuCod": "X",
                        "staStuDes": "Cessato",
                        "stuId": 283639
                    }
                ]
            };
        },
        methods: {
            capitalizeFirstLetter(str) {
                return str.replace(
                    /\w\S*/g,
                    function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    }
                );
            }
        },
        props: {
            //careers: Array
        },
        mounted() {
            f7ready(() => {
            });
        },
        components: { 
            Navbar
        }
    }
</script>
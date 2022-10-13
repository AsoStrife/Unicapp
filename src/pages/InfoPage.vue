<template>

    <f7-page name="InfoPage" :page-content="false">

        <Navbar />

        <f7-page-content>

            <f7-block>
                <h1>{{constants.app.name}}</h1>
                <small>Versione {{constants.app.version}}</small>
            </f7-block>

            <f7-list accordion-list>
                <f7-list-item accordion-item :title="$t('message.about.section_1_title')">
                    <f7-accordion-content>

                        <f7-block>
                            <div v-html="$t('message.about.section_1_content')"></div>
                        </f7-block>
                        
                        <f7-card>
                            <f7-card-content>
                                <f7-list media-list inset>
                                    <f7-list-item v-for="(item, key) in this.universities" 
                                        :key="key" 
                                        :value="key" 
                                        :title="item.description"
                                        :subtitle="item.name"></f7-list-item>
                                    </f7-list>
                            </f7-card-content>
                        </f7-card>
                        
                    </f7-accordion-content>
                </f7-list-item>

                <f7-list-item accordion-item :title="$t('message.about.section_2_title')">
                    <f7-accordion-content>
                        <f7-block>
                            <p v-html="$t('message.about.section_2_content')"></p>
                        </f7-block>
                        <f7-list media-list>
                            <f7-list-item 
                                :title="$t('message.about.ac')" 
                                :subtitle="$t('message.about.ac_grade')"
                                :link="constants.urls.ig_andreacorriga" 
                                :external="true"
                                target="_blank">
                                <template #media>
                                    <img src="/andrea-corriga-asostrife-profile-image.png" width="50" class="img-circle img-50px"/>
                                </template>
                            </f7-list-item>
                            <f7-list-item 
                                :title="constants.app.name" 
                                :subtitle="$t('message.about.ig_profile')"
                                :link="constants.urls.ig_unicapp" 
                                :external="true"
                                target="_blank">
                                <template #media>
                                    <img src="/logo/unicapp-circle-512x512.png" width="50" class="img-circle img-50px"/>
                                </template>
                            </f7-list-item>
                            <f7-list-item 
                                :title="constants.app.name"  
                                :subtitle="$t('message.about.fb_profile')"
                                :link="constants.urls.fb_unicapp" 
                                :external="true"
                                target="_blank">
                                <template #media>
                                    <img src="/logo/unicapp-circle-512x512.png" width="50" class="img-circle img-50px"/>
                                </template>
                            </f7-list-item>
                        </f7-list>
                    </f7-accordion-content>
                </f7-list-item>

            </f7-list>

        </f7-page-content>

    </f7-page>
</template>

<style scoped>
    h1 {
        margin-bottom: 0;
        color: var(--f7-block-title-text-color);
        font-weight: var(--f7-block-title-font-weight);
    }
    small {
        margin-top:0;
        color: var(--f7-block-title-text-color);
    }

    p {
        text-align: justify;
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import Navbar from '../components/Navbar.vue'
    import constants from '../js/unicapp/constants'
    import universities from '../js/unicapp/universities'

    export default {
        name: "InfoPage",
        data() {
            return {
                constants: constants,
                universities: universities
            };
        },
        methods: {},
        mounted() {
            var self = this

            f7ready(() => {
                self.$firebase.setCurrentScreen("InfoPage")
            })
        },
        components: { 
            Navbar
        }
    }
</script>
<template>

    <f7-popup class="demo-popup-swipe" swipe-to-close>
        <f7-page>
            <f7-navbar :title="$t('message.avgCalculator.popupTitle')">
                <f7-nav-right>
                    <f7-link popup-close>{{$t('message.general.close')}}</f7-link>
                </f7-nav-right>
            </f7-navbar>

           
            <form>
        
                <f7-list class="mt-0" no-hairlines-md>
                    <f7-list-input
                        outline
                        :label="$t('message.avgCalculator.popupExamName')"
                        :placeholder="$t('message.avgCalculator.popupExamName')"
                        floating-label
                        type="text"
                        clear-button
                        :value="examName"
                        @input="examName = $event.target.value"
                    >
                    </f7-list-input>

                    <f7-list-input
                        outline
                        :label="$t('message.avgCalculator.popupExamGrade')"
                        :placeholder="$t('message.avgCalculator.popupExamGrade')"
                        floating-label
                        type="number"
                        clear-button
                        :value="examGrade"
                        @input="examGrade = $event.target.value"
                    >
                    </f7-list-input>

                    <f7-list-input
                        outline
                        :label="$t('message.avgCalculator.popupExamCFU')"
                        :placeholder="$t('message.avgCalculator.popupExamCFU')"
                        floating-label
                        type="number"
                        clear-button
                        :value="examCfu"
                        @input="examCfu = $event.target.value"
                    >
                    </f7-list-input>

                </f7-list>

                <f7-block>
                    <f7-button fill popup-close
                        @click="addExam" 
                        :disabled="isEmpty(this.examGrade) || isEmpty(this.examCfu)"> {{$t('message.avgCalculator.popupAddButton')}} 
                    </f7-button>
                </f7-block>

            </form>
            
        </f7-page>
    </f7-popup>

</template>

<script>
    import { f7ready, f7 } from 'framework7-vue'

    export default {
        name: "AddExamCalculator", 
        props: {
            backLink: Boolean
        },
        data() {
            return {
                examName: "",
                examCfu: "",
                examGrade: ""
            }
        },
        methods: {
            isEmpty(str) {
                return (!str || str.length === 0);
            },
            addExam() {
                f7.emit('addExamCalculator', {
                    examName: this.examName,
                    examCfu: this.examCfu, 
                    examGrade: this.examGrade
                })
            }
        },
        mounted() {
            f7ready(() => {
                
            })
        },
        components: {
        }
    }
</script>

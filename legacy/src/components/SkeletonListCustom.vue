<template>
    <div class="list media-list skeleton-text skeleton-effect-wave">
        <ul>
            <li class="item-content">
                <div class="item-media">
                    <div class="skeleton-block skeleton-media"></div>
                </div>
                <div class="item-inner">
                    <div class="item-title-row">
                        <div class="item-title">{{this.defaultValues.titleList}}</div>
                        <div class="item-after">{{this.defaultValues.titleAfter}}</div>
                    </div>
                </div>
            </li>
            <li class="item-content">
                <div class="item-media">
                    <div class="skeleton-block skeleton-media"></div>
                </div>
                <div class="item-inner">
                    <div class="item-title-row">
                        <div class="item-title">{{this.defaultValues.titleList}}</div>
                        <div class="item-after">{{this.defaultValues.titleAfter}}</div>
                    </div>
                </div>
            </li>
            <li class="item-content">
                <div class="item-media">
                    <div class="skeleton-block skeleton-media"></div>
                </div>
                <div class="item-inner">
                    <div class="item-title-row">
                        <div class="item-title">{{this.defaultValues.titleList}}</div>
                        <div class="item-after">{{this.defaultValues.titleAfter}}</div>
                    </div>
                </div>
            </li>
            <li class="item-content">
                <div class="item-media">
                    <div class="skeleton-block skeleton-media"></div>
                </div>
                <div class="item-inner">
                    <div class="item-title-row">
                        <div class="item-title">{{this.defaultValues.titleList}}</div>
                        <div class="item-after">{{this.defaultValues.titleAfter}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .skeleton-media {
        width: 40px; 
        height: 40px; 
        border-radius: 25%;
    }
</style>

<script>
    import { f7ready, f7 } from 'framework7-vue'
    import constants from '../js/unicapp/constants'

    export default {
        name: "SkeletonListCustom", 
        data() {
            return {
                defaultValues: constants.defaultValues
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
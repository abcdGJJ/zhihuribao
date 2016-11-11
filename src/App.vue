<template>
    <div id="app">
        <common-header></common-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import CommonHeader from './components/CommonHeader.vue'
export default {
    components: {
        CommonHeader
    }
}
</script>
<style lang="stylus">
*
    margin 0
    padding 0
    box-sizing border-box
body
    font-family 'Microsoft Yahei'
    background-color #f3f3f3
a
    text-decoration none
.fade-enter-active, .fade-leave-active
    transition all .2s ease
.fade-enter, .fade-leave-active
    opacity 0
</style>
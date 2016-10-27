<template>
    <div id="app">
        <common-header v-bind:text="title" :iconone="iconclassName" v-bind:target="target" :iconothers="iconsClassName"></common-header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import CommonHeader from './components/CommonHeader.vue'
export default {
    data () {
        return {
            title: '首页',
            iconclassName: 'icon-sangeheng',
            target: '/',
            iconsClassName: ['icon-click-16', 'icon-sangedian']
        }
    },
    events: {
        'commonHeaderContent': function (text) {
            console.log(text)
        }
    },
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
    transition all .3s ease
.fade-enter, .fade-leave-active
    // opacity 0
    transform translate3d(0, 10px, 0)
</style>
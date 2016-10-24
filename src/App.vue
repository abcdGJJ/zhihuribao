<template>
    <div id="app">
        <common-header v-bind:text="title" v-bind:icon="icon" v-bind:target="target"></common-header>
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
            icon: '',
            target: '/'
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
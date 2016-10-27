<template>
    <div class="header">
        <div class="container">
            <div class="icon">
                <i class="iconfont" :class="iconone"></i>
            </div>
            <div class="text">
                <router-link v-bind:to="target">{{text}}</router-link>
            </div>
            <div class="icon" v-for="icon in iconothers">
                <i class="iconfont" :class="icon"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: '',
        iconone: '',
        target: '',
        iconothers: ''
    }
}
</script>
<style>
@import '../assets/font/iconfont.css'
</style>
<style lang="stylus">
.container
    width 90%
    margin 0 auto
    display flex
    font-size 22px
    align-items center
</style>
<style lang="stylus" scoped>
.header
    width 100%
    height 70px
    background-color #00a2ed
    display flex
    // padding 0 10px
.icon
    flex 1
    text-align center
.iconfont
    font-size 24px
.text
    flex 5
.icon, .text
    color #fff
.text a
    color #fff
</style>
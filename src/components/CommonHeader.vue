<template>
    <div class="header">
        <div class="container">
            <div class="icon">
                <i class="iconfont" :class="$store.state.iconclassName[0].name" @click="$store.commit($store.state.iconclassName[0].action)"></i>
            </div>
            <div class="text">
                <a href="/#">{{$store.state.title}}</a>
            </div>
            <div class="icon" v-for="icon in $store.state.iconsClassName">
                <i class="iconfont" :class="icon.name" @click="$store.commit(icon.action)"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        event: ''
    },
    created () {
        console.log('created header')
    },
    methods: {
        // doSomething () {
        //     this.$store.commit(this.$store.state.iconclassName[0].action)
        // },
        // doOtherthing() {
        //     this.$store.commit(this.$store.state.)
        // }
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
    position fixed
    top 0
    left 0
    z-index 10
    // padding 0 10px
.icon
    flex 1
    text-align center
.iconfont
    font-size 22px
// @media 
.text
    flex 3
.icon, .text
    color #fff
.text a
    color #fff
</style>
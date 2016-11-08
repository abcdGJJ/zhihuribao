<template>
    <div class="swiper-container">
        <div class="swiper-wrapper" >
            <router-link :to="{name: 'show', params: {id:data.id}}" v-for="data in items" class="swiper-slide" :style="{background: 'url(' + replaceUrl(data.image) + ') no-repeat top left / 100% 100%'}">
                <!-- <div class="swiper-slide" :style="{background: 'url(' + replaceUrl(data.image) + ') no-repeat center center', backgroundSize: 'cover'}"> -->
                    <div class="mask"></div>
                    <p class="bannerTitle">{{data.title}}</p>
                <!-- </div> -->
            </router-link>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
    props: ['items'],
    updated: function () {
        new window.Swiper('.swiper-container', {
            autoplay: 2000, // 自动播放
            direction: 'horizontal',
            loop: true,
            // autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    }
}
</script>
<style>
@import '../../node_modules/swiper/dist/css/swiper.min.css'
</style>
<style lang="stylus">
@media (min-width: 700px)
    .swiper-container
        width 100%
        height 4rem
@media (max-width: 699px)
    .swiper-container
        width 100%
        height 3.5rem
.mask
    position absolute
    width 100%
    height 100%
    // background linear-gradient(to bottom, rgba(0,0,0,0) 60% ,rgba(0,0,0,0.3) 100%)
    background linear-gradient(to bottom, rgba(0,0,0,0) 25%,rgba(0,0,0,0.6) 100%)
// .swiper-wrapper a
//     display block
//     width 100%
//     height 100%
//     position relative
//     flex-shrink 0
// .swiper-slide
//     flex 1
.swiper-pagination-bullet-active
    background: #fff
.bannerTitle
    position absolute
    z-index 5
    margin 0 7%
    bottom .35rem
    color #fff
    font-size .3rem
.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets
    font-size .16rem
.swiper-container-horizontal > .swiper-pagination-bullets
    bottom .1rem
</style>
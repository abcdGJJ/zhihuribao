<template>
    <div class="display">
        <carousel :items="datas.top_stories"></carousel>
        <div class="contents">
            <div class="date">
                <p>今日热闻</p>
            </div>
            <ul>
                <li v-for="data in datas.stories" class="article">
                    <router-link :to="{name: 'show', params: {id:data.id}}">
                        <div class="title">{{data.title}}</div>
                        <div class="img">
                            <img :src="replaceUrl(data.images[0])">
                        </div>
                    </router-link>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
export default {
    created () {
        console.log('created home')
        this.$http.get('/latest').then(function (response) {
            this.datas = response.body
        }, function (response) {
            console.log('error')
        })
    },
    data () {
        return {
            datas: ''
        }
    },
    components: {
        Carousel
    }
    // beforeRouteEnter: (to, from, next) => {
    //     // window.Vue.nextTick(
    //         // () =>
    //     // next(vm => {
    //     //     console.log('typeof vm')
    //     // })
    //         // }))
    //     // next(
    //     //     // this.nextTick(
    //     //     //     function () {
    //     //     //         window.scroll(0, 500)
    //     //     //     }
    //     //     // )
    //     // )
    //     // setTimeout(function () {
    //     //     window.scroll(0, 500)
    //     // }, 1)
    // }
}
</script>
<style lang="stylus" scoped>
.display
    overflow hidden
.contents
    padding 0 10px
    background-color #f3f3f3
.date p
    height 40px
    line-height 40px
    margin-left 10px
.article
    cursor pointer
    background-color #fff
    padding 10px
    margin-bottom 15px
    border 1px solid #ddd
    border-radius 5px
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, .05), 0 1px 4px 0 rgba(0, 0, 0, .08), 0 3px 1px -2px rgba(0, 0, 0, .2)
    display flex
.article a
    display flex
    flex 1
    color #000
.article .title
    flex 4
    margin-right 10px
.article .img
    width 70px
    height 70px
.article .img img
    width 100%
    height 100%
</style>
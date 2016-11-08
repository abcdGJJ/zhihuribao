<template>
    <div class="display">
        <carousel :items="datas.top_stories"></carousel>
        <div class="contents">
            <div class="date">
                <p>{{ date }}</p>
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

    // beforeDestroy () {
    //     // console.log(window.sessionStorage.getItem('scrollTop'))
    //     // let scrollTop = window.sessionStorage.getItem('scrollTop') ? window.sessionStorage.getItem('scrollTop') : 0
    //     // console.log(scrollTop)
    //     // window.scrollTo(0, scrollTop)
    //     console.log('before destroy')
    //     console.log(window.scrollY)
    //     window.sessionStorage.setItem('scrollTop', window.scrollY)
    // },
    // mounted () {
    //     console.log('mount')
    //     console.log(window.sessionStorage.getItem('scrollTop'))
    // },
    activated () {
        this.$store.commit('originalhead')
        console.log('activated home')
        this.$http.get('/latest').then(function (response) {
            this.date = '今日热闻'
            this.datas = response.body
        }, function (response) {
            console.log('error')
        })
    },
    // updated () {
    //     console.log('update')
    //     console.log(window.localStorage.getItem('scrollTop'))
    //     window.scrollTo(0, window.localStorage.scrollTop)
    //     // this.$nextTick(function () {
    //     //     console.log('next运行')
    //     //     window.scrollTo(0, window.localStorage.scrollTop)
    //     // })
    //     // if (window.sessionStorage.scrollTop) {
    //     //     window.scrollTo(0, window.sessionStorage.scrollTop)
    //     // }
    // },
    // destroyed () {
    //     console.log('before destroy')
    //     window.localStorage.setItem('scrollTop', window.scrollY)
    // },
    // beforeRouteLeave (to, from, next) {
    //     window.localStorage.setItem('scrollTop', window.scrollY)
    //     // window.localStorage.datas = JSON.stringify(this.datas)
    //     next()
    // },
    data () {
        return {
            datas: '',
            date: ''
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
    padding-top 70px
    overflow hidden
.contents
    padding 0 10px
    background-color #f3f3f3
.date p
    height 40px
    line-height 40px
    font-size .2rem
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
    font-size .38rem
    margin-right 10px
.article .img
    width 1.7rem
    height 1.7rem
    font-size .2rem
.article .img img
    width 100%
    height 100%
</style>
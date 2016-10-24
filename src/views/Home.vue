<template>
    <div>
        <carousel>轮播图</carousel>
        <div class="content" v-for="">
            <div class="date">
                <p>今日热闻</p>
            </div>
            <ul>
                <li v-for="datas in data" class="article">
                    <router-link v-bind:to="{name: 'show', params: {id:datas.id}}">
                        <div class="title">{{datas.title}}</div>
                        <div class="img">
                            <img src="../assets/test.jpg">
                        </div>
                    </router-link>
                </li>
            </div>
        </div>
    </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
export default {
    created: function () {
        // console.log('aa')
        this.$http.get('/latest').then(function (response) {
            // console.log(response.body.stories)
            this.data = response.body.stories
        }, function (response) {
            console.log('error')
        })
    },
    data () {
        return {
            data: []
        }
    },
    components: {
        Carousel
    }
}
</script>
<style lang="stylus" scoped>
.content
    padding 0 10px
    background-color #f3f3f3
.date p
    height 40px
    line-height 40px
    margin-left 10px
.article
    cursor pointer
    height 90px
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
.article .img
    flex 1
.article .img img
    width 100%
    height 100%
</style>
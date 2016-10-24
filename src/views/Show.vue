<template>
    <div class="show">
        <div class="img">
            <img src="../assets/test2.jpg">
        </div>
        <div v-if="loading">加载中......</div>
        <div v-if="error">错误</div>
        <div class="detail" v-html="article"></div>
    </div>
</template>
<script>
export default {
    created: function () {
        console.log(this.$route.params.id)
        let url = '/detail/' + this.$route.params.id
        console.log(url)
        this.$http.get(url).then(function (response) {
            // console.log(response.body.body)
            this.article = response.body.body
            this.loading = !this.loading
        }, function (response) {
            console.log('error')
        })
    },
    data () {
        return {
            loading: true
            // article: []
        }
    }
}
</script>
<style lang="stylus" scoped>
.img img
    width 100%
    height 288px
</style>
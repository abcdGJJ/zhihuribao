<template>
    <div class="show">
        <div class="img">
            <img :src="replaceUrl(article.image)" v-cloak>
        </div>
        <div v-if="loading">加载中......</div>
        <div v-if="error">错误</div>
        <div class="detail" v-html="replaceUrl(article.body)" v-cloak></div>
    </div>
</template>
<script>
export default {
    created () {
        this.getArticle()
    },
    data () {
        return {
            loading: true,
            error: false,
            article: []
        }
    },
    methods: {
        getArticle () {
            let url = '/detail/' + this.$route.params.id
            this.$http.get(url).then(function (response) {
                this.article = response.body
                this.loading = !this.loading
            }, function (response) {
                this.error = !this.error
                console.log('error')
            })
        }
    }
}
</script>
<style scoped>
@import '../assets/zhihu.css'
</style>
<style>
.img img {
    width: 100%;
    height: 280px
}
/*知乎样式调整*/
.view-more a {
    color: #B8B8B8;
}
.headline {
    border-bottom: 0;
}
.headline .img-place-holder {
    height: 0;
}
/*知乎样式调整完*/
</style>
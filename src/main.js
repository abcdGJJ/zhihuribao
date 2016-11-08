import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Swiper from 'swiper'
import App from './App.vue'
import store from './store/store'
window.Swiper = Swiper
Vue.use(VueRouter)
Vue.use(VueResource);
// rem 布局方案
(
    function (doc, win) {
        var el = doc.documentElement
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
        var recalc = function () {
            var clientWidth = el.clientWidth
            if (!clientWidth) return
            if (clientWidth >= 720) {
                el.style.fontSize = '100' + 'px'
            } else {
                el.style.fontSize = clientWidth / 7.2 + 'px'
            }
        }
        if (!el.addEventListener) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
    }
)(document, window)
// 过滤器
Vue.prototype.replaceUrl = function (value) {
    if (!value) {
        return
    } else {
        return value.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
    }
}
const routes = [
    {path: '/', component: resolve => require(['./views/Home.vue'], resolve)},
    {path: '/show/:id', name: 'show', component: resolve => require(['./views/Show.vue'], resolve)},
    {path: '/counter', component: resolve => require(['./views/Counter.vue'], resolve)},
    {path: '/test', component: resolve => require(['./views/Test.vue'], resolve)},
    {path: '*', component: resolve => require(['./views/Home.vue'], resolve)}
]
const router = new VueRouter({
    routes
})
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')

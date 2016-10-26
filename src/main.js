import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
// import ReplaceUrl from './filters/replaceUrl.js'
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.filter('replaceUrl', function (value) {
//     return value.split('').reverse().join('')
// })
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
    {path: '/test', component: resolve => require(['./views/Test.vue'], resolve)},
    {path: '*', component: resolve => require(['./views/Home.vue'], resolve)}
]
const router = new VueRouter({
    routes
})
new Vue({
    render: h => h(App),
    router
}).$mount('#app')

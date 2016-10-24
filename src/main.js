import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
    {path: '/', component: resolve => require(['./views/Home.vue'], resolve)},
    {path: '/show/:id', name: 'show', component: resolve => require(['./views/Show.vue'], resolve)},
    {path: '*', component: resolve => require(['./views/Home.vue'], resolve)}
]
const router = new VueRouter({
    routes
})
new Vue({
    render: h => h(App),
    router
}).$mount('#app')

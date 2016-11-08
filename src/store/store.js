import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    title: '首页',
    iconclassName: [{name: 'icon-sangeheng', action: 'slide'}],
    iconsClassName: [
        {
            name: 'icon-click-16',
            action: 'info'
        },
        {
            name: 'icon-sangedian',
            action: 'night'
        }
    ]
}
const mutations = {
    originalhead (state) {
        state.title = '首页'
        state.iconclassName = [{name: 'icon-sangeheng', action: 'slide'}]
        state.iconsClassName = [{name: 'icon-click-16', action: 'info'}, {name: 'icon-sangedian', action: 'night'}]
    },
    replacehead (state) {
        state.title = ' '
        state.iconclassName = [{name: 'icon-houtui', action: 'back'}]
        state.iconsClassName = [{name: 'icon-share', action: 'info'}, {name: 'icon-shoucang', action: 'night'}, {name: 'icon-pinglun01', action: 'info'}, {name: 'icon-dianzan', action: 'info'}]
    },
    reset (state) {
        state.count = 0
    }
}
const actions = {
    // originalhead: ({ commit }) => commit('originalhead'),
    // replacehead: ({ commit }) => commit('replacehead'),
    // addifodd ({commit, state}) {
    //     if ((state.count + 1) % 2 === 0) {
    //         commit('increment')
    //     }
    // },
    // reset: ({commit}) => commit('reset')
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})

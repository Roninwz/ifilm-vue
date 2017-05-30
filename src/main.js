// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.css'

import Config from './config' // 配置文件

Vue.use(VueMaterial)
Vue.config.productionTip = false


// 主题颜色
Vue.material.registerTheme('default', {
    primary: 'yellow',
    accent: 'purple',
    warn: 'red',
    background: 'white'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

// red
// pink
// purple
// deep-purple
// indigo
// blue
// light-blue
// cyan
// teal
// green
// light-green
// lime
// yellow
// amber
// orange
// deep-orange
// brown
// grey
// blue-grey
// white
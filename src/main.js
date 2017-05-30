// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.css'

import config from './config'

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
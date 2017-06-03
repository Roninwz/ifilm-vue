// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import config from '../src/assets/js/config'
import VueMaterial from 'vue-material'
import '../src/assets/css/google-fonts.css'
import '../src/assets/css/google-icon.css'
import '../node_modules/vue-material/dist/vue-material.css'
import FastClick from 'fastclick'
// 全局化
global.axios = axios
global.config = config

Vue.use(VueMaterial)

Vue.config.productionTip = false

// 执行fastclick
FastClick.attach(document.body);

// 主题颜色
Vue.material.registerTheme('default', {
    primary: 'yellow',
    accent: 'red',
    warn: 'purple',
    background: 'white'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
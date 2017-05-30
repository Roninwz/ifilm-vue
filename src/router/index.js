import Vue from 'vue'
import Router from 'vue-router'

import ifilmIndex from '../components/ifilm-index';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: ifilmIndex
        }

    ]
})
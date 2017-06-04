import Vue from 'vue'
import Router from 'vue-router'
import ifilmIndex from '../components/ifilm-index';
import ifilmSearch from '../components/ifilm-search';
import ifilmMovies from '../components/ifilm-movies';
import ifilmTvs from '../components/ifilm-tvs';
import ifilmAbout from '../components/ifilm-about';
import ifilmPlay from '../components/ifilm-play';
Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
        path: '/',
        component: ifilmIndex
    }, {
        path: '/search',
        component: ifilmSearch
    }, {
        path: '/movies',
        component: ifilmMovies
    }, {
        path: '/tvs',
        component: ifilmTvs
    }, {
        path: '/about',
        component: ifilmAbout
    }, {
        name: 'play',
        path: '/play/:id',
        component: ifilmPlay
    }],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition
    }
})
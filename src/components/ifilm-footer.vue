<template>
    <div id="footer">
        <md-bottom-bar md-shift>
            <md-bottom-bar-item v-for="menu in menus" :md-icon="menu.icon">
                <router-link :to="menu.router">{{menu.name}}</router-link>
            </md-bottom-bar-item>
        </md-bottom-bar>
    
    </div>
</template>

<script>
export default {
    name: 'ifilm-footer',
    data() {
        return {
            menus: [
                {
                    name: '搜索',
                    icon: 'search',
                    router: '/search'
                }, {
                    name: '电影',
                    icon: 'movie',
                    router: '/movies'
                }, {
                    name: '首页',
                    icon: 'home',
                    router: '/'
                }, {
                    name: '电视剧',
                    icon: 'tv',
                    router: '/tvs'
                }, {
                    name: '关于',
                    icon: 'contacts',
                    router: '/contacts'
                },
            ]
        }
    },
    methods: {
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        },
        toggleRightSidenav() {
            this.$refs.rightSidenav.toggle();
        },
        closeRightSidenav() {
            this.$refs.rightSidenav.close();
        },
        open(ref) {
            console.log('Opened: ' + ref);
        },
        close(ref) {
            console.log('关闭d: ' + ref);
        }
    }
}
</script>

<style>
#footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    z-index: 9999
}

a {
    text-decoration: none !important;
}
</style>

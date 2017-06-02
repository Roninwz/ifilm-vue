<template>
    <div id="footer">
        <md-bottom-bar md-shift>
            <md-bottom-bar-item v-for="menu in menus" :md-icon="menu.icon" @click.native="openPage(menu.router)" >
              {{menu.name}}
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
                    router: 'search'
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
        },
        openPage(router){
           this.$router.push({path:router})
        }
    }
}
</script>

<style>
#footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    z-index: 9999;
}

a {
    text-decoration: none !important;
}
</style>

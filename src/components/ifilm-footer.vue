<template>
    <div id="footer">
        <md-bottom-bar md-shift>
            <md-bottom-bar-item v-for="menu in menus" :md-icon="menu.icon" @click.native="openPage(menu.router)" >
              {{menu.name}}
            </md-bottom-bar-item>
        </md-bottom-bar>
              <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
      <md-button class="md-fab" md-fab-trigger>
        <md-icon md-icon-morph>close</md-icon>
        <md-icon>add</md-icon>
      </md-button>
  
      <md-button class="md-fab md-mini ">
        <md-icon>email</md-icon>
      </md-button>
  
      <md-button class="md-fab md-mini " onclick="window.location.href='HTTPS://QR.ALIPAY.COM/FKX018082PG71P5SCS0LAF'">
        <md-icon>content_copy</md-icon>
      </md-button>
    </md-speed-dial>
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
                    router: '/about'
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

<style scoped>
#footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    z-index: 9999;
}

a {
    text-decoration: none !important;
}

.md-fab.md-fab-bottom-right, .md-speed-dial.md-fab-bottom-right {
  bottom: 80px!important;
}
</style>

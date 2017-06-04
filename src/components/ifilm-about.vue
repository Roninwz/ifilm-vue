<template>
  <div id="container">
    <md-tabs md-fixed>
  
      <md-tab md-label="声明">
        本站所有内容均通过程序爬虫采集自互联网，仅供测试和学习交流。 目前正在逐步删除和规避爬虫自动采集到的不提供分享的版权影视。 若侵犯了您的权益，请即时发邮件通知站长。
        <br>
        <md-icon class="md-accent">email</md-icon>：
        <a href="mailto:saboranmin@gmail.com">saboranmin@gmail.com</a>
        <br>请大家尊重知识产权，支持正版，万分感谢！
      </md-tab>
  
      <md-tab md-label="致谢">
        <!--开源项目-->
        <div>
          <md-icon class="md-warn">more_vert</md-icon>
          <span>感谢以下优秀开源项目</span>
        </div>
        <div class="phone-viewport">
          <md-list class="custom-list md-triple-line">
            <md-list-item v-for="item in projects">
              <div class="md-list-text-container">
                <a :href="item.link">
                  <img style="max-width:60vw" :src="item.logo" :alt="item.name">
                </a>
              </div>
              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">star</md-icon>
              </md-button>
            </md-list-item>
  
          </md-list>
        </div>
  
        <!--技术论坛-->
        <div>
          <md-icon class="md-warn">more_vert</md-icon>
          <span>感谢以下优秀技术论坛</span>
        </div>
        <div class="phone-viewport">
          <md-list class="custom-list md-triple-line">
            <md-list-item v-for="item in communities">
              <div class="md-list-text-container">
                <a :href="item.link">
                  <img style="max-width:60vw;" :src="item.logo" :alt="item.name">
                </a>
              </div>
              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">star</md-icon>
              </md-button>
            </md-list-item>
  
          </md-list>
        </div>
  
      </md-tab>
    </md-tabs>
  <br>
  <br>
  </div>
</template>

<script>
export default {
  name: 'ifilm-about',
  data() {
    return {
      projects: [{
        name: 'laravel',
        link: 'https://github.com/laravel/laravel',
        logo: 'https://camo.githubusercontent.com/5ceadc94fd40688144b193fd8ece2b805d79ca9b/68747470733a2f2f6c61726176656c2e636f6d2f6173736574732f696d672f636f6d706f6e656e74732f6c6f676f2d6c61726176656c2e737667',
      }, {
        name: 'VueJs',
        link: 'https://github.com/vuejs/vue',
        logo: 'http://ww1.sinaimg.cn/large/6aedb651gy1fg8w90b8nlj204u01o3yg.jpg',
      }, {
        name: 'vue-material',
        link: 'https://github.com/vuematerial/vue-material',
        logo: 'http://ww1.sinaimg.cn/large/6aedb651gy1fg8w4titstj202w01ojrc.jpg',
      },],
      communities: [{
        name: 'segmentfault',
        link: 'https://www.segmentfault.com',
        logo: 'http://ww1.sinaimg.cn/large/6aedb651gy1fg8vfxdujsj20ey02w0sq.jpg',
      }, {
        name: 'laravel-china',
        link: 'https://laravel-china.org/',
        logo: 'https://dn-phphub.qbox.me/assets/images/logo4.png',
      }, {
        name: 'adonis-china',
        link: 'https://adonis-china.org/',
        logo: 'http://ww1.sinaimg.cn/large/6aedb651gy1fg8vmd9i6aj20fz024t8r.jpg',
      }]
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="header">
  
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon v-if="isShowBack" @click.native="back()">keyboard_arrow_left</md-icon>
        <md-icon v-if="!isShowBack" class="md-warn">favorite</md-icon>
      </md-button>
  
      <h2 class="md-title" style="flex: 1">爱电影</h2>
  
      <md-button class="md-icon-button">
        <md-icon class="md-warn">favorite</md-icon>
      </md-button>
    </md-toolbar>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBack: false,
    }
  },
  watch: {
    $route() {
      if (this.$route.fullPath.indexOf('play') != -1) {
        this.isShowBack = true
      } else {
        this.isShowBack = false
      }
    }
  }, methods: {
    back() {
      this.$router.go(-1)
    }
  }, mounted() {
    if (window.location.href.indexOf('play') != -1) {
      this.isShowBack = true
    } else {
      this.isShowBack = false
    }
  }
}
</script>

<style>
#header {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9999
}

a {
  text-align: center;
  color: white;
}

.md-toolbar {
  min-height: 8vh
}
</style>

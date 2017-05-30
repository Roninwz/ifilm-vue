<template>
  <div id="app">
    <ifilm-header></ifilm-header>
    <router-view></router-view>
    <ifilm-footer></ifilm-footer>
  </div>
</template>

<script>
import ifilmHeader from './components/ifilm-header';
import ifilmFooter from './components/ifilm-footer';
export default {
  name: 'app',
  components:{
  ifilmHeader,ifilmFooter
  }
}
</script>

<style>

</style>

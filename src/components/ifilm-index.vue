<template>
  <div id="container">
  
    <md-tabs md-fixed>
      <md-tab v-for="(tag,index) in tags" :md-label="tag.name">
        <div class="loading" v-if="isLoading">
          <md-spinner md-indeterminate class="md-warn"></md-spinner>
        </div>
        <md-layout md-gutter v-if="tag.items.length && !isLoading">
          <md-layout md-flex="45" v-for="item in tag.items" class="row" md-align="center">
            <md-card>
              <md-card-media @click.native="play(item.id)">
                <img :src="item.cover">
              </md-card-media>
              <md-card-actions @click.native="play(item.id)">
                <div>{{item.title}} </div>
              </md-card-actions>
            </md-card>
          </md-layout>
        </md-layout>
        <div v-else-if="!isLoading">
          暂无资源
        </div>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'ifilm-index',
  data() {
    return {
      isLoading: true,
      tags: [{
        name: '最新电影',
        title: 'movies',
        items: [],
      }, {
        name: '最新电视剧',
        title: 'tvs',
        items: [],
      }, {
        name: '最新动漫',
        title: 'animes',
        items: [],
      }],
    }
  },
  methods: {
    play(id) {
      this.$router.push({ name: 'play', params: { id: id } })
    }
  },
  mounted() {
    var that = this
    axios.get(config.baseApi + '/films').then(function (response) {
      that.tags[0].items = response.data.movies
      that.tags[1].items = response.data.tvs
      that.tags[2].items = response.data.animes

      that.isLoading = false
    }).catch(function (error) {

    })
  }
}
</script>

<style>
.row {
  margin: 1vw auto;
}
.md-tabs{
  position: fixed!important;
}
.md-tabs-content{
  height: 80vh!important;
  overflow-y: auto!important;
}
.md-tabs .md-tabs-navigation{
  min-height: 6vh!important;
}
</style>

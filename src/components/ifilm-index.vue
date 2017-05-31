<template>
  <div id="index">
  
    <md-tabs md-fixed>
      <md-tab v-for="(tag,index) in tags" :md-label="tag.name">
        <div style="text-align:center;font-size:2rem;" v-if="isLoading">
          <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <md-layout md-gutter v-if="tag.items.length && !isLoading">
          <md-layout md-flex="45" v-for="item in tag.items" class="row" md-align="center">
            <md-card>
              <md-card-media>
                <img :src="item.cover" alt="People">
              </md-card-media>
              <md-card-actions>
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

  },
  mounted() {
    var that = this
    axios.get(config.baseApi + '/test').then(function (response) {
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
#index {
  margin: 64px auto;
}

.row {
  margin: 3vw auto
}
</style>

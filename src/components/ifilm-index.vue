<template>
  <div id="index">
    <md-tabs md-fixed>
      <md-tab v-for="(tag,index) in tags" :md-label="tag.name">
        <md-layout md-gutter>
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
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import config from '../config';
export default {
  name: 'ifilm-index',
  data() {
    return {
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
      },],
      currentTag: 0,

    }
  },
  methods: {

  },
  mounted() {
    var that = this
    config.axios.get(config.baseApi + '/test').then(function (response) {
      that.tags[0].items = response.data.movies
      that.tags[1].items = response.data.tvs
      that.tags[2].items = response.data.animes
    }).catch(function (error) {

    })
  }
}
</script>

<style>
#index {
  margin-top: 15vw;
}

.row {
  margin: 3vw auto
}
</style>

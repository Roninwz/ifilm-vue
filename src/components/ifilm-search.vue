<template>
  <div id="container">
    <form novalidate @submit.stop.prevent="search(q)">
  
      <md-list>
        <md-list-item>
          <md-input-container>
            <!--<label>关键词</label>-->
            <md-input placeholder="请输入关键词" v-model="q"></md-input>
          </md-input-container>
          <md-button class="md-icon-button md-raised md-accent" @click.native="search(q)">
            <md-icon md-accent>search</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </form>
    <div class="loading" v-show="isLoading">
      <md-spinner md-indeterminate class="md-warn"></md-spinner>
    </div>
    <!--搜索出来的电影 -->
    <div class="movies" v-show="movies.length>0">
      <div>
        <md-icon class="md-warn">more_vert</md-icon>
        <span>电影</span>
      </div>
      <div style="padding:5vw;margin-bottom:8vh">
        <md-layout md-gutter>
          <md-layout md-flex="45" v-for="item in movies" class="row" md-align="center">
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
      </div>
    </div>
    <!--搜索出来的电视剧-->
    <div class="tvs" v-show="tvs.length>0">
      <div>
        <md-icon class="md-warn">more_vert</md-icon>
        <span>电视剧</span>
      </div>
            <div style="padding:5vw;margin-bottom:8vh">
        <md-layout md-gutter>
          <md-layout md-flex="45" v-for="item in tvs" class="row" md-align="center">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ifilm-search',
  data() {
    return {
      q: '',
      movies: [],
      tvs: [],
      isLoading: false
    }
  },
  methods: {
    search(q) {
      if (q.length == 0) {
        return
      }
      localStorage.setItem('q', q)
      this.isLoading = true
      axios.get(config.baseApi + 'search?q=' + q).then(response => {
        this.isLoading = false
        this.movies = response.data.movies
        this.tvs = response.data.tvs
      }).catch(error => {

      })
    },
    play(id) {
      this.$router.push({ name: 'play', params: { id: id } })
    },
  },
  mounted() {
    var q = localStorage.getItem('q')
    if (q == null) {
      return
    }
    console.log(typeof q)
    this.search(q)
  }
}
</script>

<style scoped>
.row {
  margin: 1vw auto;
}
</style>

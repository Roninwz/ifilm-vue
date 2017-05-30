<template>
  <div id="index">
    <md-tabs md-fixed>
      <md-tab id="movies" md-label="最新电影">
        <md-layout md-gutter>
          <md-layout md-flex="50" v-for="i in 5" class="row" md-align="center">
            <md-card>
              <md-card-media>
                <img src="http://tva3.sinaimg.cn/crop.0.0.996.996.180/6aedb651jw8f7nnmybnooj20ro0rowh6.jpg" alt="People">
              </md-card-media>
  
              <md-card-header>
                <div class="md-desc">Title goes here</div>
              </md-card-header>
  
            </md-card>
          </md-layout>
        </md-layout>
      </md-tab>
      <md-tab id="tvs" md-label="最新电视剧">
        <md-layout md-gutter>
          <md-layout md-flex="50" v-for="i in 5" class="row" md-align="center">
            <md-card>
              <md-card-media>
                <img src="http://tva3.sinaimg.cn/crop.0.0.996.996.180/6aedb651jw8f7nnmybnooj20ro0rowh6.jpg" alt="People">
              </md-card-media>
  
              <md-card-header>
                <div class="md-desc">Title goes here</div>
              </md-card-header>
  
            </md-card>
          </md-layout>
        </md-layout>
      </md-tab>
            <md-tab id="animes" md-label="最新动漫">
            <p>暂无资源</p>
      </md-tab>
    </md-tabs>
  
  </div>
</template>

<script>
export default {
  name: 'ifilm-index'
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

<template>
  <div id="container">
  
    <div style="padding:5vw;margin-bottom:8vh" id="test">
      <md-layout md-gutter v-if="items.length>0">
        <md-layout md-flex="45" v-for="item in items" class="row" md-align="center">
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
      <div class="loading" v-if="isLoading">
        <md-spinner md-indeterminate class="md-warn"></md-spinner>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'ifilm-search',
  data() {
    return {
      isLoading: true,
      items: [],
      nextPage: 1
    }
  },
  methods: {
    play(id) {
      this.$router.push({ name: 'play', params: { id: id } })
    },
    fetch() {
      axios.get(config.baseApi + 'films?page=' + this.nextPage).then(response => {
        this.items = this.items.concat(response.data.data)
        this.nextPage++
        // this.isLoading = false
      }).catch(error => {

      })
    },
    refresh: function (done) {

    },
    infinite: function (done) {

    }
  },
  mounted() {
    var that = this
    window.addEventListener('scroll', function () {
      // console.log(document.body.scrollTop)
      console.log(document.body.scrollTop +document.body.offsetHeight +60)
      console.log(document.body.scrollHeight)
      if (document.body.scrollTop + document.body.offsetHeight > document.body.scrollHeight - 60) {
        that.fetch()
      }
    })
    this.fetch()
  },
}
</script>

<style>
.row {
  margin: 1vw auto;
}
</style>

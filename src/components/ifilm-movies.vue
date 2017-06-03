<template>
  <div id="container">
  
    <div style="padding:5vw;margin-bottom:8vh">
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
      nextPage: 1,
      scroll: 0,
      isFetched: false
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
    }

  },
  mounted() {
    var that = this
    addEventListener('scroll', () => {
      this.scroll = document.body.scrollTop + document.body.offsetHeight
    })
    this.fetch()
  },
  watch: {
    scroll() {
      if ((this.scroll > (document.body.scrollHeight - 60)) && !this.isFetched && this.items.length >0) {
        this.isFetched = true
        this.fetch()
      }
      if (this.scroll < (document.body.scrollHeight - 60)) {
        this.isFetched = false
      }
    }
  }
}
</script>

<style scoped>
.row {
  margin: 1vw auto;
}
</style>

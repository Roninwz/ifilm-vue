<template>
    <div id="container">
        <div class="loading" v-if="isLoading">
            <md-spinner md-indeterminate class="md-warn"></md-spinner>
        </div>
        <md-card v-if="!isLoading">
            <md-card-media>
                <video :src="item.src[currentSrcIndex]" autoplay controls>您的浏览器暂时不支持MP4播放</video>
            </md-card-media>
            <md-card-actions>
                <div v-if="item.tag==1">正在播放：【{{item.title}}】资源{{currentSrcIndex+1}} </div>
                <div v-if="item.tag==2">正在播放：【{{item.title}}】第{{currentSrcIndex+1}}集 </div>
            </md-card-actions>
        </md-card>
<div class="item">
            <div v-if="item.tag == 1" style="margin-top:10px">
            <md-button class="md-raised md-primary" v-for="(src,index) in item.src" @click.native="changeSrc(index)">资源{{index+1}}</md-button>
        </div>
                <div v-if="item.tag == 2" style="margin-top:10px">
            <md-button class="md-raised md-primary" v-for="(src,index) in item.src" @click.native="changeSrc(index)">第{{index+1}}集</md-button>
        </div>
</div>
    </div>
</template>

<script>
export default {
    name: 'ifilm-play',
    data() {
        return {
            isLoading: true,
            item: {},
            currentSrcIndex:0
        }
    },
    methods: {
      changeSrc(index){
        this.currentSrcIndex = index
      }  
    },
    mounted() {
        axios.get(config.baseApi + '/films/' + this.$route.params.id).then(response => {
            this.item = response.data
            this.isLoading = false
        }).then(err => {

        })
    }
}
</script>

<style scoped>
video {
    width: 100vw;
    height: 56.25vw !important;
}
.item{
    text-align: center
}
button.md-button.md-raised.md-primary.md-theme-default{
    margin-left: 5vw
}
</style>

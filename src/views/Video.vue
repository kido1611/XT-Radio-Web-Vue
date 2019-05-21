<template>
    <div class="container text-center" style="" >
        <div class="row">
            <!-- <b-col cols="12" class="text-center">
                <h2 style="">Video List</h2>
            </b-col> -->
            <XTVideo v-for="item in videoList" v-bind:key="item" v-bind:id="item"></XTVideo>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import XTVideo from '@/components/XTVideo'
export default {
    name: "Video",
    components:{
        XTVideo
    },
    data: () => ({
        videoList: []
    }),
    mounted() {
        /* eslint-disable no-console */
        axios
            // https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id=LDnsa5-igKw&key=AIzaSyByS2fDWX22pUxGG_KqwnVJu4aW-641h8s
            .get('https://raw.githubusercontent.com/kido1611/XT-Radio-Web/master/public/data/video.json')
            //.get('/data/video.json')
            .then(response => {
                this.videoList = response.data.video;
            })
            .catch(e => {
                console.log(e);
            });
    }
}
</script>


<style scoped>
    /* .container{
        display: flex;
        /* align-items: center;
        min-height: calc(100vh - 80px);
    }
    @media (min-width: 768px) {
        .container{
            min-height: calc(100vh - 210px);
        }
    } */
</style>
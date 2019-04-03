<template>
    <div class="container">
        <b-tabs content-class="mt-2" style="width: 100%;">
            <b-tab title="Livestream" active title-item-class="w-50 tabs-title">
                <div class="container text-center w-100" id="livestream-container">
                    <h3 class="w-100">Memuat data</h3>
                </div>
            </b-tab>
            <b-tab title="Livestream lawas" title-item-class="tabs-title w-50">
                <Video></Video>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import axios from 'axios'
import Video from '@/views/Video.vue'

export default {
    name: "Livestream",
    components: {
        Video
    },
    data: () => ({
        channel: "UCqyYrbhDar48h7-mj1RNb2g",
        kunciGeni: "AIzaSyByS2fDWX22pUxGG_KqwnVJu4aW-641h8s",
        //channel : "UCThyazpS-fnWAHsFZLYBNXg"
    }),
    mounted () {
        axios
            .get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+this.channel+'&type=video&eventType=live&key='+this.kunciGeni)
            .then(response => {
                /* eslint-disable no-console */
                // console.log(response.data);
                var data = response.data;
                var item = data.items[0];
                if(data.pageInfo.totalResults > 0){
                    document.getElementById("livestream-container").innerHTML = "<iframe src=\"https://www.youtube.com/embed/"+item.id.videoId+"\" frameborder=\"0\" allowfullscreen width=\"100%\" height=\"480px\"></iframe>";
                }
                else
                {
                    document.getElementById("livestream-container").innerHTML = "<h1 class=\"w-100\">Tidak ada livestreaming</h1>";
                }
            })
            .catch(e => {
                /* eslint-disable no-console */
                document.getElementById("livestream-container").innerHTML = "<h1 class=\"w-100\">Gagal. "+e.message+"</h1>";
            })
    }
}
</script>

<style>
    /* .tabs-title{
        overflow: hidden;
    } */
    /* .container{
        display: flex;
        align-items: center;
        min-height: calc(100vh - 80px);
    }
    @media (min-width: 768px) {
        .container{
            min-height: calc(100vh - 210px);
        }
    } */
</style>

<style>
    .tabs-title > a{
        white-space: nowrap;
        overflow: hidden;
        color: #fff;
    }
    .tabs-title > .nav-link.active{
        background-color: #ff6f00;
        border-color: #ff6f00 #ff6f00 #fff #ff6f00;
        color: #fff;
    }
</style>

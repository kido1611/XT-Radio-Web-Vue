<template>
    <div class="container text-center" style="" id="livestream-container" >
        <h3>Memuat data</h3>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Livestream",
    data: () => ({
        channel: "UCqyYrbhDar48h7-mj1RNb2g",
        //channel : "UCThyazpS-fnWAHsFZLYBNXg"
    }),
    mounted () {
        axios
            .get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+this.channel+'&type=video&eventType=live&key=AIzaSyByS2fDWX22pUxGG_KqwnVJu4aW-641h8s')
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
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
        min-height: calc(100vh - 80px);
    }
    @media (min-width: 768px) {
        .container{
            min-height: calc(100vh - 210px);
        }
    }
</style>
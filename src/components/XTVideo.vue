<template>
    <div class="col-12 text-left mt-2 mb-2 mr-2" v-on:click="buka" v-bind:id=id style="cursor: pointer;">
        <div style="display: flex; align-items: center;">
            <span class="shine img-shine"></span>
            &nbsp;&nbsp;
            <span class="shine text-shine"></span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "XTVideo",
    props: {
        id: String
    },
    data: () => ({
        kunciGeni: "AIzaSyByS2fDWX22pUxGG_KqwnVJu4aW-641h8s"
    }),
    mounted(){
        /* eslint-disable no-console */
        axios
            .get('https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id='+this.id+'&key='+this.kunciGeni)
            .then(response => {
                if(response.data.items.length > 0){
                    document.getElementById(this.id).innerHTML = "<img src=\""+response.data.items[0].snippet.thumbnails.medium.url+"\" width=\"100px\">&nbsp;&nbsp;<span>"+response.data.items[0].snippet.title+"</span>";
                }
            })
            .catch(e => {
                document.getElementById(this.id).innerHTML="Gagal: "+e.message;
                console.log(this.id+": "+e.message);
            });
    },
    methods: {
        buka: function(){
            window.open("https://www.youtube.com/watch?v="+this.id);
        }
    }
}
</script>

<style>
    .img-shine{
        width: 100px;
        height: 100px;
    }
    .text-shine{
        width: 100%;
        height: 24px;
    }
    .shine {
        background: #212121;
        background-image: linear-gradient(to right, #212121 0%, #ff6f00 20%, #212121 40%, #212121 100%);
        background-repeat: no-repeat;
        background-size: 800px 104px; 
        display: inline-block;
        position: relative; 

        -webkit-animation-duration: 1s;
        -webkit-animation-fill-mode: forwards; 
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: placeholderShimmer;
        -webkit-animation-timing-function: linear;
    }
    @-webkit-keyframes placeholderShimmer {
        0% {
            background-position: -468px 0;
        }

        100% {
            background-position: 468px 0; 
        }
    }
</style>

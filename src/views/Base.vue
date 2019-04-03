<template>
    <div class="wrapper">
        <audio ref="audio" nocontrols id="audio-player" preload="auto">
            Your browser does not support the audio element.
        </audio>
        <TopNavbar></TopNavbar>
        <div id="view">
            <router-view/>
        </div>
        <Footer></Footer>
        <XTAtensi></XTAtensi>
        <BottomNavbar></BottomNavbar>
    </div>
</template>

<script scoped>
import XTAtensi from '../components/XTAtensi.vue'
import TopNavbar from '../components/TopNavbar.vue'
import BottomNavbar from '../components/BottomNavbar.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        XTAtensi,
        BottomNavbar,
        TopNavbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
    #view{
        color: #eee;
        min-height: calc(100vh - 10px);
        padding-top: 10px;
        padding-bottom: 70px;
    }
    @media (min-width: 768px) {
        #view{
            min-height: calc(100vh - 147px);
            padding-bottom: 30px;
        }
    }
    .wrapper{
        background-color: #212121;
        color: rgba(255,255,255,0.7);
        min-height: calc(100vh);
        min-width: 300px;

        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>


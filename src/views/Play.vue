<template>
    <div class="content container playercontainer">
        <b-row class="m-auto align-items-center w-100">
            <b-col cols="12" md="6" class="text-center">
                <img src="../assets/logo.png" alt="XT Logo" style="width:250px; height: 250px;">
            </b-col>
            <b-col cols="12" md="6" class="w-100">
                <XTPlayer id="audio-player" url="https://xt-radio.com:8001/stream"></XTPlayer>
                <br/>
                <XTAcara style="max-width: 300px; margin: auto;"></XTAcara>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import XTPlayer from '@/components/XTPlayer.vue'
import XTAcara from '@/components/XTAcara.vue'
export default {
    name: 'Play',
    components: {
        XTPlayer, 
        XTAcara
    }
}
</script>

<style scoped>
    .playercontainer{
        display: flex;
        align-items: center;
        min-height: calc(100vh - 80px);
    }
    @media (min-width: 768px) {
        .playercontainer{
            min-height: calc(100vh - 210px);
        }
    }
</style>


<template>
    <div class="xt-player">
        <audio nocontrols id="xt-player-audio">
            <!-- <source src="http://112.78.45.66:8000/stream" type="audio/mpeg"> -->
            Your browser does not support the audio element.
        </audio>
        <XTButton v-on:click.native="play">
            <font-awesome-icon v-bind:icon="playIcon"></font-awesome-icon><br/>
            {{isPlaying?'Stop':'Play'}}
        </XTButton>
        &nbsp;
        <XTButton v-on:click.native="volume">
            <font-awesome-icon v-bind:icon="volumeIcon"></font-awesome-icon><br/>
            {{isVolumeHigh?'100%':'Muted'}}
        </XTButton>
    </div>
</template>

<script>
    import XTButton from '@/components/XTButton.vue'
    export default {
        name: 'XTPlayer',
        props: {
            id: String,
            url: String
        },
        components: {
            XTButton
        },
        data: () => ({
            audio : undefined,
            isPlaying : false,
            isVolumeHigh : true,
            volumeIcon: "volume-up",
            playIcon: "play",
            defaultUrl: "http://112.78.45.66:8000/stream",
        }),
        mounted(){
            if(this.id==undefined){
                this.audio = document.getElementById("xt-player-audio");
            }
            else
            {
                this.audio = document.getElementById(this.id);
            }

            if(this.url!=undefined){
                this.defaultUrl = this.url;
            }

            if(this.audio.volume==1){
                this.isVolumeHigh = true;
            }
            else
            {
                this.isVolumeHigh = false;
            }

            if(this.audio.paused==true){
                this.isPlaying = false;
            }
            else
            {
                this.isPlaying = true;
            }
            this.updateState();
        },
        methods: {
            play: function(){
                /* eslint-disable no-console */
                while (this.audio.firstChild) {
                    this.audio.removeChild(this.audio.firstChild);
                }

                var addAudio = document.createElement("source");
                addAudio.setAttribute("src", this.defaultUrl);
                addAudio.setAttribute("type", "audio/mpeg");
                this.audio.appendChild(addAudio);

                if(this.isPlaying){
                    this.audio.pause();
                    this.isPlaying = false;
                    console.log("Stopping XTRadio");
                }
                else
                {
                    this.audio.play();
                    this.isPlaying = true;
                    console.log("Playing XTRadio");
                }
                this.updateState();
                /* eslint-disable no-console */
            },
            volume: function(){
                /* eslint-disable no-console */
                if(this.isVolumeHigh){
                    this.audio.volume = 0;
                    this.isVolumeHigh = false;
                    console.log("Volume to 0");
                }
                else
                {
                    this.audio.volume = 1;
                    this.isVolumeHigh = true;
                    console.log("Volume to 1");
                }
                this.updateState();
                /* eslint-disable no-console */
            },
            updateState: function(){
                if(this.isVolumeHigh){
                    this.volumeIcon = "volume-up";
                }
                else
                {
                    this.volumeIcon = "volume-mute";
                }

                if(this.isPlaying){
                    this.playIcon = "stop";
                }
                else
                {
                    this.playIcon = "play";
                }
            }
        }
    }
</script>
<template>
    <div class="content">
        <h2 style="">Crew List</h2>
        <b-container class="text-left" >
            <div v-for="item in list" v-bind:key="item.nama">
                <h3 class="text-uppercase" style="margin-top: 8px; margin-bottom: 0px;">{{item.nama}}</h3>
                <!-- <hr/>
                <b-row class="m-0">
                    <b-col cols md="6" lg="4" v-for="anggota in item.anggota" v-bind:key="anggota.nim" class="p-1">
                        <div class="crew-card">
                            <h5 class="text-uppercase" style="">{{anggota.jabatan}}</h5>
                            <h6 class="m-0" style="color: rgba(255,255,255,0.7);">{{anggota.nama}} - {{anggota.nim}}</h6>
                        </div>
                    </b-col>
                </b-row> -->
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    /* eslint-disable no-console */
    name: "Crew",
    data() {
        return {
            active: null,
            list: []
        }
    },
    mounted(){
        axios
            .get('/data/crew.json')
            .then(response => {
                this.active = response.data.active
                this.list = response.data.list[this.active]
            })
    }
}
</script>

<style scoped>
    hr{
        margin: 8px 0px;
        margin-top: 0px;
        border-top: 2px solid #fff;
    }
    p{
        margin: 0;
    }
    .crew-card{
        border-radius: .3rem;
        border: 2px solid rgba(255,111,000,1);
        box-shadow: 0 0 10px rgba(255,111,000,.5);
        padding: 8px;
        transition: .2s all;
        cursor: pointer;
        user-select: none;
    }
    .crew-card:hover{
        background-color: #ff3A00;
        border: 2px solid rgba(255,58,000,1);
        box-shadow: 0 0 16px rgba(255,58,000,.5);
    }
    .crew-card:hover  h3 {
        color: #ddd;
    }
</style>

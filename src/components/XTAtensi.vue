<template>
    <div id="atensi" class="text-right">
        <div id="button-atensi" v-b-modal.modalAtensi>
            <font-awesome-icon v-bind:icon="['fas', 'envelope']" size="2x"></font-awesome-icon>
            <br/>
            <span style="font-size: 0.7em;">Atensi</span>
        </div>
        <b-modal centered header-bg-variant="light" header-text-variant="dark" body-bg-variant="light" body-text-variant="dark" id="modalAtensi" title="Atensi" v-bind:hide-footer="true" size="sm">
            <div class="my-4 text-center">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=6281391110068&text=&source=&data="><font-awesome-icon v-bind:icon="['fab', 'whatsapp']" size="3x"></font-awesome-icon></a>
                &nbsp;
                <a target="_blank" href="https://twitter.com/intent/tweet?text=@XT_RADIO"><font-awesome-icon v-bind:icon="['fab', 'twitter']" size="3x"></font-awesome-icon></a>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'XTAtensi'
}
</script>


<style scoped lang="scss">
$buttonAtensiSize: 63px;
#atensi{
        position: fixed;
        top: 300px;
        right: 4px;
        z-index: 10000;
        color: #fff;
        opacity: 0.6;
        cursor: pointer;
        transition: all 0.2s;
    }
    #atensi:hover{
        opacity: 1;
    }
    #button-atensi{
        background-color: #ff6f00;
        border-radius: 50%;
        padding: 8px;
        text-align: center;
        width: $buttonAtensiSize;
        height: $buttonAtensiSize;
        line-height: 6px;
    }
</style>


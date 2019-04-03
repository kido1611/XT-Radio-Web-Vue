<template>
    <div id="atensi" class="text-right">
        <div id="button-atensi" v-b-modal.modalAtensi>
            <font-awesome-icon v-bind:icon="['fas', 'envelope']" size="2x"></font-awesome-icon>
            <br/>
            <span style="font-size: 0.7em;">Atensi</span>
        </div>
        <b-modal centered header-bg-variant="light" header-text-variant="dark" body-bg-variant="light" body-text-variant="dark" id="modalAtensi" title="Atensi" v-bind:hide-footer="true" size="sm" modal-class="xt-modal">
            <div>
                <div>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=6281391110068&text=&source=&data="
                        style="display: flex; align-items: center; text-decoration: none;justify-content: center;" class="text-center">
                        <font-awesome-icon v-bind:icon="['fab', 'whatsapp']" size="3x"></font-awesome-icon>
                        &nbsp;
                        +62 813 9111 0068
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://twitter.com/intent/tweet?text=@XT_RADIO"
                        style="display: flex; align-items: center; text-decoration: none;justify-content: center;" class="text-center">
                        <font-awesome-icon v-bind:icon="['fab', 'twitter']" size="3x"></font-awesome-icon>
                        &nbsp;
                        @XT_RADIO
                    </a>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'XTAtensi'
}
</script>

<style>
.xt-modal .modal-body, .xt-modal .modal-header, .xt-modal .modal-header .close{
    padding: 8px 16px;
}
.xt-modal .modal-header .close{
    margin: -0.3rem -1rem -1rem auto;
}
</style>


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


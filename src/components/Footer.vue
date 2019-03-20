<template>
    <div id="footer" class="d-none d-md-block bg-dark">
        <b-container class="d-flex" style="min-height: 80px;">
            <b-row class="m-0" align-v="center" style="width: 100%;">
                <b-col cols md="6" order-md="12" class="text-md-right">
                    <XTSocialMedia></XTSocialMedia>
                </b-col>
                <b-col cols md="6" style="font-size: 14px;" order-md="1" class="text-md-left">
                    &copy; 2018 XT Radio - Only Fly For Freedom
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import XTSocialMedia from '../components/XTSocialMedia.vue'
export default {
    name: 'Footer',
    components: {
        XTSocialMedia
    }
}
</script>

<style scoped>
#footer{
    color: #fff;
    font-size: 0.8rem;
    line-height: 3rem;
}
</style>



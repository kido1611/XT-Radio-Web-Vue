<template>
    <div class="social-media">
        <div style="line-height: 1rem;">
            Follow us
        </div>
        <div>
            <a href="http://twitter.com/xt_radio" target="_blank"><font-awesome-icon v-bind:icon="['fab', 'twitter']" size="2x"></font-awesome-icon></a>
            &nbsp;
            <a href="http://www.instagram.com/xt_radio" target="_blank"><font-awesome-icon v-bind:icon="['fab', 'instagram']" size="2x"></font-awesome-icon></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'XTSocialMedia',
    props: {

    }
}
</script>

<style scoped>
    a{
        color: #007bff;
    }
    a:hover{
        color: #0056b3;
    }
</style>

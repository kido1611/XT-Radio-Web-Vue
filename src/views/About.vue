<template>
	<div class="container about text-center">
		<b-row class="w-100 m-auto">
			<b-col cols="12"><h2>XT Radio</h2></b-col>
			<b-col cols="12"><XTSocialMedia></XTSocialMedia></b-col>
		</b-row>
	</div>
</template>

<script>
import XTSocialMedia from '../components/XTSocialMedia.vue'
export default {
	components: {
		XTSocialMedia
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
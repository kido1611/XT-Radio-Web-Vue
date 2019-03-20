<template>
    <b-navbar type="dark" variant="" toggleable="md" class="d-none d-md-block" id="top-navbar">
        <b-container>
            <img src="../assets/logo.png" style="width: 50px; height: 50px;">
            <router-link to="/" class="navbar-brand">
                &nbsp;
                XT Radio
            </router-link>
            <div class="mr-auto"></div>
            <b-collapse is-nav id="nav_collapse">
                <div class="mr-auto"></div>
                <b-navbar-nav >
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" v-bind:replace="true">Play</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/livestream" class="nav-link" v-bind:replace="true">Video Livestream</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link to="/video" class="nav-link">Video</router-link>
                    </li> -->
                    <li class="nav-item">
                        <router-link to="/crew" class="nav-link" v-bind:replace="true">Crew</router-link>
                    </li>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: 'TopNavbar'
}
</script>

<style scoped>

</style>

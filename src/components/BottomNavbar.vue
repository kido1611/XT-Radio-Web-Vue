<template>
    <b-navbar type="dark" variant="dark" fixed="bottom" toggleable="" class="d-md-none" id="bottom-navbar">
        <b-navbar-nav class="w-100 nav-pils">
            <li class="nav-item">
                <router-link to="/" class="nav-link" v-bind:replace="true">
                    <font-awesome-icon v-bind:icon="['fas', 'music']" size="1x" style=""></font-awesome-icon><br/>
                        Play
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/livestream" class="nav-link" v-bind:replace="true">
                    <font-awesome-icon v-bind:icon="['fas', 'video']" size="1x" style=""></font-awesome-icon><br/>
                    Video Live
                </router-link>
            </li>
            <!-- <li class="nav-item">
                <router-link to="/video" class="nav-link" v-bind:replace="true">
                    <font-awesome-icon v-bind:icon="['fas', 'video']" size="1x" style=""></font-awesome-icon><br/>
                    Video
                </router-link>
            </li> -->
            <li class="nav-item">
                <router-link to="/crew" class="nav-link" v-bind:replace="true">
                    <font-awesome-icon v-bind:icon="['fas', 'users']" size="1x" style=""></font-awesome-icon><br/>
                    Crew
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link" v-bind:replace="true">
                    <font-awesome-icon v-bind:icon="['fas', 'info']" size="1x" style=""></font-awesome-icon><br/>
                    XT Radio
                </router-link>
            </li>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'BottomNavbar'
}
</script>

<style scoped>
#bottom-navbar .navbar-nav {
    display:table;
    table-layout: fixed;
}
#bottom-navbar .navbar-nav > li{
    display:table-cell;
    text-align: center;
}
#bottom-navbar .navbar-nav > li > a{
    padding: 0px;
}
</style>

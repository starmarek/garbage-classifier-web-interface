<template>
    <b-navbar class="is-spaced has-shadow" type="is-primary" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item :to="{ path: '/' }" tag="router-link">
                <b-icon :style="{ margin: '6px' }" icon="account-hard-hat"></b-icon>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item :to="{ path: '/about' }" tag="router-link">
                <b-icon :style="{ margin: '6px' }" icon="information-outline" />
                <p class="is-unselectable">About</p>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Navbar",
};
</script>

<style scoped lang="scss">
.navbar.has-shadow {
    box-shadow: 0px 1px 0px hsla(0, 0%, 100%, 0.2);
}

.navbar {
    margin-bottom: 30pt;
}
</style>

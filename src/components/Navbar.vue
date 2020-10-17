<template>
    <b-navbar class="is-spaced has-shadow" type="is-primary" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item :to="{ path: '/' }" tag="router-link">
                <b-icon :style="{ margin: '6px' }" icon="account-hard-hat"></b-icon>
                <transition name="slide-left">
                    <p
                        v-if="$route.path !== '/'"
                        class="subtitle is-5 is-unselectable has-spacing no-wrap"
                        style="color: white"
                    >
                        ManTLE
                    </p>
                </transition>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item :to="{ path: '/about' }" tag="router-link">
                <b-icon :style="{ margin: '6px' }" icon="information-outline" />
                <p class="is-unselectable">About</p>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-dropdown label="My account">
                <b-navbar-item>
                    <b-icon :style="{ margin: '6px' }" icon="logout" />
                    <p class="is-unselectable">Logout</p>
                </b-navbar-item>
            </b-navbar-dropdown>
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
@keyframes slideLeftIn {
    0% {
        opacity: 0;
        transform: translateX(-1rem);
        max-width: 0px;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
        max-width: 120px;
    }
}
@keyframes slideLeftOut {
    0% {
        opacity: 1;
        transform: translateX(0);
        max-width: 120px;
    }
    100% {
        opacity: 0;
        transform: translateX(-1rem);
        max-width: 0px;
    }
}
//Animation: Slide left
.slide-left-enter-active {
    animation: slideLeftIn 0.4s ease-out;
}
.slide-left-leave-active {
    animation: slideLeftOut 0.4s ease-in;
}
.slide-left-enter,
.slide-left-leave-to {
    opacity: 0;
    max-width: 0px;
    transform: translateX(-1rem);
}
.slide-left-leave,
.slide-left-enter-to {
    opacity: 1;
    max-width: 120px;
    transform: translateX(0);
}
.no-wrap {
    white-space: nowrap;
}
.navbar.has-shadow {
    box-shadow: 0px 1px 0px hsla(0, 0%, 100%, 0.2);
}

.navbar {
    margin-bottom: 30pt;
}
</style>

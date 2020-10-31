<template>
    <div class="fix_footer" id="app">
        <Navbar />
        <div class="content">
            <div class="toast-space"></div>
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        Footer,
    },
};
</script>

<style lang="scss">
// CUSTOM
.toast-space {
    pointer-events: none;
    height: 70pt;
    width: 100%;
    position: fixed;
    z-index: 100;
    margin-top: -40pt;
}

//BUEFY

// Import Bulma's core
@import "~bulma/sass/utilities/_all";
@import "@/styles/colors.scss";

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": (
        $white,
        $black,
    ),
    "black": (
        $black,
        $white,
    ),
    "light": (
        $light,
        $light-invert,
    ),
    "dark": (
        $dark,
        $dark-invert,
    ),
    "primary": (
        $primary,
        $primary-invert,
    ),
    "secondary": (
        $secondary,
        $secondary-invert,
    ),
    "info": (
        $info,
        $info-invert,
    ),
    "success": (
        $success,
        $success-invert,
    ),
    "warning": (
        $warning,
        $warning-invert,
    ),
    "danger": (
        $danger,
        $danger-invert,
    ),
);

.fix_footer {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.content {
    flex: 1;
}

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

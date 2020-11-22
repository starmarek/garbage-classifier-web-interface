<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Home",
    components: {
        Navbar,
    },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
@import "@/styles/colors.scss";

// BULMA VARIABLES SECTION
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

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$button-disabled-opacity: 1;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

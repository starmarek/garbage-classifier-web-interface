<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item :to="{ path: '/' }" tag="router-link">
                <img src="@/assets/logo_text.png" :style="{ minHeight: '70px' }" />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item :to="{ path: '/about' }" tag="router-link">
                <b-icon :style="{ margin: '6px' }" icon="information-outline" />
                <p class="is-unselectable">About</p>
            </b-navbar-item>
            <b-navbar-item :to="{ path: '/instructions' }" tag="router-link">
                <b-icon :style="{ margin: '6px' }" icon="book-open-outline" />
                <p class="is-unselectable">Instructions</p>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button
                        tag="a"
                        target="_blank"
                        href="https://gitlab.com/starmarek/garbage-classifier-trainer"
                        class="is-secondary"
                        icon-left="gitlab"
                    >
                        AI Trainer
                    </b-button>
                    <b-button
                        tag="a"
                        target="_blank"
                        href="https://gitlab.com/starmarek/garbage-classifier-web-interface"
                        icon-left="gitlab"
                    >
                        This website
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style scoped lang="scss">
.navbar {
    height: 10vh;
}
</style>

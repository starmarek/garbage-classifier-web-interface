<template>
    <footer class="footer">
        <nav class="level container">
            <div class="level-right">
                <div>
                    <div class="level-item">
                        <img src="@/assets/logo.png" :style="{ maxHeight: '70px' }" />
                        <p style="color: white; margin-left: 10px">
                            Waste Control<br />
                            by Aleksander Pucher
                        </p>
                    </div>
                    <a
                        href="https://www.facebook.com/aleksander.pucher/"
                        target="_blank"
                        style="margin-left: 100px"
                    >
                        <b-icon size="is-medium" icon="facebook"></b-icon>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aleksander-pucher"
                        target="_blank"
                        style="margin-left: 20px"
                    >
                        <b-icon size="is-medium" icon="linkedin"></b-icon>
                    </a>
                </div>
                <div style="display: flex; flex-direction: column; margin-left: 500px">
                    <a
                        style="margin: 5px"
                        v-bind:class="{ isOn: this.$route.path == '/' }"
                        href="#"
                        >Home</a
                    >
                    <router-link
                        style="margin: 5px"
                        v-bind:class="{ isOn: this.$route.path == '/about' }"
                        to="/about"
                        >About</router-link
                    >
                    <router-link
                        style="margin: 5px"
                        v-bind:class="{ isOn: this.$route.path == '/instructions' }"
                        to="/instructions"
                        >Instructions</router-link
                    >
                </div>
            </div>
            <div class="level-left">
                <div class="has-text-centered">
                    <p style="margin-bottom: 10px; color: white">AI Trainer</p>
                    <a
                        href="https://gitlab.com/starmarek/garbage-classifier-trainer"
                        target="_blank"
                    >
                        <b-icon size="is-medium" icon="gitlab"></b-icon>
                    </a>
                </div>
                <div style="margin-left: 40px" class="has-text-centered">
                    <p style="margin-bottom: 10px; color: white">This website</p>
                    <a
                        href="https://gitlab.com/starmarek/garbage-classifier-web-interface"
                        target="_blank"
                    >
                        <b-icon size="is-medium" icon="gitlab"></b-icon>
                    </a>
                </div>
            </div>
        </nav>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style>
.footer {
    background-color: rgba(49, 49, 49, 0.726);
}
.isOn {
    color: white;
}
a:hover {
    color: white;
}
a {
    color: #4bd16f;
}
</style>

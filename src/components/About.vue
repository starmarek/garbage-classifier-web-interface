<template>
    <div>
        <div class="level" style="margin-bottom: 300px">
            <div
                style="perspective: 1500px; margin-top: 150px; margin-left: 150px"
                class="level-left"
            >
                <transition name="slide-fade">
                    <img
                        class="perspective"
                        width="700"
                        height="100"
                        v-if="show"
                        src="@/assets/reveal_about_banner.jpg"
                    />
                </transition>
            </div>
            <div class="level-right" style="margin-right: 5%; margin-top: 100px">
                <p style="font-size: 400%">
                    Average person <br />
                    produce 2kg of waste <br />
                    daily.
                </p>
            </div>
        </div>
        <div class="wave"></div>
        <div class="container">
            <p style="margin-bottom: 50px; font-size: 250%">
                About <span style="color: #4bd16f">Waste Control</span>
            </p>
            <p style="font-size: 150%">
                This project is an engineer thesis (bachelor degree diploma). <br />
                It's main goal is to popularize and encourage modern methods of waste
                sorting.<br />
            </p>
            <div class="level">
                <div>
                    <p style="font-size: 150%; margin-top: 50px; margin-bottom: 20px">
                        Project consits of two parts:
                    </p>
                    <ul>
                        <a
                            href="https://gitlab.com/starmarek/garbage-classifier-trainer"
                            target="_blank"
                        >
                            <li>Artificial Inteligence training module</li>
                        </a>
                        <a
                            href="https://gitlab.com/starmarek/garbage-classifier-web-interface"
                            target="_blank"
                        >
                            <li>Web interface (this website)</li>
                        </a>
                    </ul>
                </div>
                <div
                    style="margin-top: 50px"
                    class="level-right"
                    v-scroll-reveal.reset="{ delay: 1000 }"
                >
                    <a href="https://pwr.edu.pl/" target="_blank">
                        <img
                            style="margin-right: 50px"
                            width="150px"
                            height="150px"
                            src="@/assets/pwr.jpg"
                        />
                    </a>
                    <b-icon style="color: pink" size="is-medium" icon="heart"></b-icon>

                    <img
                        style="margin-left: 50px"
                        width="150px"
                        height="150px"
                        src="@/assets/recycle.jpg"
                    />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from "./Footer";

export default {
    name: "About",
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        this.show = true;
        window.scrollTo(0, 0);
    },
    beforeDestroy() {
        console.log("dupa2");
    },
    components: {
        Footer,
    },
};
</script>
<style scoped>
.perspective {
    transform: rotate3d(-0.1, 0.1, 0, -20deg);
    box-shadow: 20px 14px 100px rgba(0, 0, 0, 0.4), 20px 10px 10px rgba(0, 0, 0, 0.1);
}
.slide-fade-enter-active {
    transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
li {
    font-size: 150%;
    margin-left: 5%;
    list-style-type: square;
}

a {
    color: rgba(0, 0, 0, 0.705);
}
a:hover {
    color: #4bd16f;
}
</style>

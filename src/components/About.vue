<template>
    <div>
        <section style="background-color: white">
            <div class="level container" style="height: 90vh">
                <div style="perspective: 1500px" class="level-left">
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
                <div class="level-right" style="margin-left: 10%">
                    <p style="font-size: 400%">
                        Average person <br />
                        produce 2kg of waste <br />
                        daily.
                    </p>
                </div>
            </div>
            <div style="padding-bottom: 10%" class="container">
                <p style="margin-bottom: 50px; font-size: 250%">
                    About <span style="color: #4bd16f">Waste Control</span>
                </p>
                <div class="level">
                    <div>
                        <p style="width: 80%; font-size: 140%">
                            Waste Control is a <b> dual-module </b>application used to
                            recognize trash in pictures. It's main goal is to popularize
                            and encourage modern methods of waste sorting i.e. via
                            machine learning. <br />
                            <br />
                            The core of an app is a convolutional neural network, with
                            an Xception architecture. <br />
                            <br />
                            Project was made as an engineer thesis (bachelor degree
                            diploma) at
                            <a href="https://pwr.edu.pl/" target="_blank">
                                Wroclaw University Of Science.</a
                            >
                        </p>
                    </div>
                    <div class="level-right" v-scroll-reveal.reset="{ delay: 400 }">
                        <img
                            style="margin-right: 50px"
                            width="120px"
                            height="120px"
                            src="@/assets/pwr.jpg"
                        />
                        <b-icon size="is-medium" icon="arrow-left-right-bold"></b-icon>

                        <b-icon
                            size="is-large"
                            style="color: #4bd16f; margin-left: 50px"
                            icon="recycle"
                        ></b-icon>
                    </div>
                </div>
                <div class="has-text-centered" style="padding-top: 6%">
                    <p style="font-size: 200%">Modules</p>
                    <div style="margin-top: 2%" class="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="is-child notification">
                                <p class="title">Web interface</p>
                                <div class="level">
                                    <img
                                        width="120px"
                                        height="120px"
                                        src="@/assets/docker.png"
                                    /><img
                                        width="120px"
                                        height="120px"
                                        src="@/assets/vue.png"
                                    /><img
                                        width="120px"
                                        height="120px"
                                        src="@/assets/django.png"
                                    />
                                </div>
                                <div
                                    style="
                                        display: flex;
                                        flex-direction: row;
                                        justify-content: center;
                                    "
                                >
                                    <img
                                        style="margin-right: 6%"
                                        width="120px"
                                        height="120px"
                                        src="@/assets/buefy.png"
                                    /><img
                                        style="margin-left: 6%"
                                        width="120px"
                                        height="120px"
                                        src="@/assets/bulma.png"
                                    />
                                </div>
                                <p style="margin-top: 20%; font-size: 140%">
                                    This is the website you are currently looking at.
                                    It's supposed to provide an easy access to the
                                    trained model of neural network and host all the
                                    usefull informations. It should also look cool!
                                </p>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification">
                                <div class="content">
                                    <p class="title">AI Trainer</p>
                                    <div
                                        style="
                                            margin-top: 20%;
                                            display: flex;
                                            flex-direction: row;
                                            justify-content: center;
                                        "
                                    >
                                        <img
                                            style="margin-right: 6%"
                                            width="120px"
                                            height="120px"
                                            src="@/assets/keras.png"
                                        /><img
                                            style="margin-left: 8%"
                                            width="160px"
                                            height="120px"
                                            src="@/assets/tensorflow.png"
                                        />
                                    </div>
                                    <p style="margin-top: 30%; font-size: 140%">
                                        Easy to use, linux command-line application. It
                                        provides a transfer learning pipeline to train
                                        the best AI model possible. It allows to test
                                        different combinations of optimizers,
                                        architectures, hyperparameters, etc.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section style="height: 60vh">
            <parallax fixed>
                <img src="@/assets/parallax.jpg" />
            </parallax>
        </section>
        <section style="padding-top: 5%; background-color: white">
            <div style="padding-bottom: 5%" class="container">
                <div class="level">
                    <div class="level-left" v-scroll-reveal.reset="{ delay: 400 }">
                        <img width="250px" src="@/assets/author.jpg" />
                    </div>
                    <div style="margin-left: 10%">
                        <p style="margin-bottom: 50px; font-size: 250%">
                            About <span style="color: #4bd16f">author</span>
                        </p>
                        <p style="width: 80%; font-size: 140%">
                            Aleksander Pucher is a soon-to-be graduate of Wroclaw
                            University of Science at a Control Engineering faculty.
                            Daily he is working as a Software Engineer at Nokia. In his
                            free time he enjoys road biking and swimming.
                        </p>
                        <div
                            style="
                                display: flex;
                                flex-direction: row;
                                margin-top: 7%;
                                font-size: 150%;
                                text-decoration: underline;
                            "
                        >
                            <div
                                class="has-text-centered"
                                style="margin-right: 30%; margin-left: 7%"
                            >
                                <p>Social media</p>
                                <a
                                    href="https://www.facebook.com/aleksander.pucher/"
                                    target="_blank"
                                >
                                    <b-icon
                                        style="margin-top: 10%"
                                        size="is-medium"
                                        icon="facebook"
                                    ></b-icon>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aleksander-pucher"
                                    target="_blank"
                                >
                                    <b-icon
                                        style="margin-top: 10%; margin-left: 10%"
                                        size="is-medium"
                                        icon="linkedin"
                                    ></b-icon>
                                </a>
                            </div>
                            <div class="has-text-centered">
                                <p>Projects</p>
                                <a href="https://github.com/starmarek" target="_blank">
                                    <b-icon
                                        style="margin-top: 10%"
                                        size="is-medium"
                                        icon="github"
                                    ></b-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="font-size: 150%"></p>
            </div>
        </section>
        <Footer />
    </div>
</template>
<script>
import Footer from "./Footer";
import Parallax from "vue-parallaxy";

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
    components: {
        Footer,
        Parallax,
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
    color: rgb(79, 79, 235);
}
a:hover {
    opacity: 0.7;
}
</style>

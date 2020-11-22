<template>
    <div class="home">
        <section class="curtain hero is-medium has-bg-img">
            <div class="hero-body">
                <div style="float: left; margin-left: 150px" class="content">
                    <p class="title description">
                        Sort your waste <br />
                        via images!
                    </p>
                </div>
                <div class="has-text-centered upload-box">
                    <p class="title">Upload your photos</p>
                    <b-upload
                        type="is-primary"
                        v-model="filesDeposit"
                        multiple
                        drag-drop
                        expanded
                        style="padding-bottom: 30px"
                        @input="checkAmount"
                    >
                        <section class="section">
                            <div class="content has-text-centered">
                                <b-icon icon="upload" size="is-large"> </b-icon>
                                <p>Drag and drop or click</p>
                            </div>
                        </section>
                    </b-upload>
                    <span v-for="(file, index) in filesDeposit" :key="index">
                        <img :src="getURL(file)" />
                        <button
                            class="delete is-small"
                            type="button"
                            style="margin-right: 10px"
                            @click="deleteFile(index)"
                        ></button>
                    </span>
                    <b-button
                        :disabled="filesDeposit.length ? false : true"
                        rounded
                        class="submit-button"
                        type="is-secondary"
                        @click="submitFiles()"
                        >Submit</b-button
                    >
                    <b-tooltip class="help-icon" position="is-right">
                        <template v-slot:content>
                            <ol>
                                <li>Only 5 photos at once</li>
                                <li>Overall size of 20MB</li>
                                <li>No HEIC files allowed</li>
                            </ol>
                        </template>
                        <b-icon icon="help-circle-outline" size="is-medium"></b-icon>
                    </b-tooltip>
                </div>
            </div>
            <div
                style="position: relative; top: -15%"
                class="hero-footer has-text-centered"
            >
                <p style="font-size: 150%; color: white; margin-bottom: 20px">
                    Or choose one from gallery
                </p>
                <b-button
                    class="pulsingButton"
                    @click="scrollToTiles()"
                    size="is-large"
                    style="margin-bottom: 100px"
                    icon-left="arrow-down-thick"
                    rounded
                ></b-button>
            </div>
        </section>
        <div :class="class2"></div>
        <div ref="tiles" style="padding-top: 100px" :class="class1">
            <HomeTiles />
            <Footer />
        </div>
    </div>
</template>

<script>
import { DialogProgrammatic as Dialog } from "buefy";
import HomeTiles from "./HomeTiles";
import Footer from "./Footer";

export default {
    name: "Home",
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    data() {
        return {
            filesDeposit: [],
            offset: "",
            class1: "main",
            class2: "reveal-main",
            classChangeHeight: 350,
        };
    },
    components: {
        HomeTiles,
        Footer,
    },
    watch: {
        offset: function (val) {
            if (val > this.classChangeHeight) {
                this.class1 = "main active";
                this.class2 = "reveal-main activetwo";
            } else {
                this.class1 = "main";
                this.class2 = "reveal-main";
            }
        },
    },
    computed: {
        dropFiles: {
            get() {
                return this.$store.getters.dropFiles;
            },
            set(value) {
                this.$store.commit("updateDropFiles", value);
            },
        },
    },
    methods: {
        handleScroll() {
            this.offset = window.pageYOffset;
        },
        submitFiles() {
            try {
                this.validateFiles();
            } catch (e) {
                return;
            }
            this.dropFiles = this.filesDeposit;
            this.$store.dispatch("postFiles", this);
        },
        deleteFile(index) {
            this.filesDeposit.splice(index, 1);
        },
        getURL(e) {
            return URL.createObjectURL(e);
        },
        checkAmount(e) {
            if (e.length > 5) {
                var to_remove = e.length - 5;
                this.filesDeposit.splice(5, to_remove);
                Dialog.alert({
                    title: "Upload Error",
                    message: "You can only upload up to <b>5 images</b> at once",
                    type: "is-danger",
                    hasIcon: true,
                    icon: "alert-circle-outline",
                });
            }
        },
        scrollToTiles() {
            var container = this.$refs.tiles;
            if (window.pageYOffset > this.classChangeHeight) {
                container.scrollIntoView({
                    behavior: "smooth",
                });
            } else {
                window.scrollBy({
                    top: window.innerHeight,
                    left: 0,
                    behavior: "smooth",
                });

                setTimeout(
                    () =>
                        container.scrollIntoView({
                            behavior: "smooth",
                        }),
                    500
                );
            }
        },
        validateFiles() {
            var files_size = 0;
            var file_size_error = false;
            var file_type_error = false;
            var dialog_message = "";

            for (const file of this.filesDeposit) {
                files_size += file.size;
                if (file.type == "image/heif") {
                    file_type_error = true;
                    dialog_message = "<li>-- HEIC files are not supported</li>";
                }
            }
            if (files_size > 20000000) {
                file_size_error = true;
                dialog_message =
                    dialog_message +
                    "<li>-- Overall files size cannot exceed 20MB</li>";
            }

            if (file_type_error || file_size_error) {
                Dialog.alert({
                    title: "There are some errors with your files",
                    message: "<ul>" + dialog_message + "</ul>",
                    type: "is-danger",
                    hasIcon: true,
                    icon: "alert-circle-outline",
                });
                throw 1;
            }
        },
    },
};
</script>
<style scoped lang="scss">
.has-bg-img {
    background: rgba(0, 0, 0, 0.4) url("../assets/home_hero_background.jpg") center
        center;
    background-size: cover;
    background-blend-mode: darken;
}
.upload-box {
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 12%;
    padding-top: 60px;
    padding-bottom: 30px;
    border-radius: 25px;
    float: right;
    background-color: white;
    width: 500px;
    max-width: 500px;
    height: 470px;
    max-height: 470px;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.submit-button {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 213px;
    margin-bottom: 20px;
}
.help-icon {
    position: absolute;
    margin-left: 450px;
    margin-bottom: 20px;
    bottom: 0;
    left: 0;
}
img {
    height: 40pt;
    width: 40pt;
}
.curtain {
    height: 90vh;
    position: relative;
    z-index: 2;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
}
.main {
    position: fixed;
    bottom: 0;
    height: 351px;
    width: 100%;
}

.reveal-main {
    height: 351px;
}
ol {
    padding-left: 1em;
}
.active {
    position: relative;
}

.activetwo {
    position: absolute;
}
.description {
    color: #4bd16f;
    font-size: 400%;
}
.pulsingButton {
    box-shadow: 0 0 0 0 rgb(248, 248, 248);
    -webkit-animation: pulsing 2s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulsing 2s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulsing 2s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: pulsing 2s infinite cubic-bezier(0.66, 0, 0, 1);
    transition: all 300ms ease-in-out;
}

.pulsingButton:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
}

@-webkit-keyframes pulsing {
    to {
        box-shadow: 0 0 0 10px rgba(248, 248, 248, 0);
    }
}

@-moz-keyframes pulsing {
    to {
        box-shadow: 0 0 0 10px rgba(248, 248, 248, 0);
    }
}

@-ms-keyframes pulsing {
    to {
        box-shadow: 0 0 0 10px rgba(248, 248, 248, 0);
    }
}

@keyframes pulsing {
    to {
        box-shadow: 0 0 0 10px rgba(248, 248, 248, 0);
    }
}
</style>

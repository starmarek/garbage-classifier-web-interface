<template>
    <section style="margin-bottom: 100px" class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            src="@/assets/tiles_photos/1.jpg"
                        />
                    </a>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            src="@/assets/tiles_photos/2.jpg"
                        />
                    </a>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            src="@/assets/tiles_photos/3.jpg"
                        />
                    </a>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            src="@/assets/tiles_photos/4.jpg"
                        />
                    </a>
                </div>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-vertical is-9">
                <div class="tile">
                    <div class="tile is-parent">
                        <div class="tile is-child">
                            <a>
                                <img
                                    @click="submit($event)"
                                    src="@/assets/tiles_photos/5.jpg"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="tile is-8 is-vertical">
                        <div class="tile">
                            <div class="tile is-parent">
                                <div class="tile is-child">
                                    <a>
                                        <img
                                            @click="submit($event)"
                                            src="@/assets/tiles_photos/6.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <div class="tile is-child">
                                    <a>
                                        <img
                                            @click="submit($event)"
                                            src="@/assets/tiles_photos/7.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child">
                                <a>
                                    <img
                                        @click="submit($event)"
                                        style="width: 100%; height: 156px"
                                        src="@/assets/tiles_photos/8.jpg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tile">
                    <div class="tile is-8 is-parent">
                        <div class="tile is-child">
                            <a>
                                <img
                                    @click="submit($event)"
                                    style="width: 100%; height: 100%"
                                    src="@/assets/tiles_photos/9.jpg"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child">
                            <a>
                                <img
                                    @click="submit($event)"
                                    style="width: 100%; height: 100%"
                                    src="@/assets/tiles_photos/10.jpg"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            style="height: 100%"
                            src="@/assets/tiles_photos/11.jpg"
                        />
                    </a>
                </div>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            style="width: 100%; height: 100%"
                            src="@/assets/tiles_photos/12.jpg"
                        />
                    </a>
                </div>
            </div>
            <div class="tile is-parent is-6">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            style="width: 100%; height: 100%"
                            src="@/assets/tiles_photos/13.jpg"
                        />
                    </a>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a>
                        <img
                            @click="submit($event)"
                            style="width: 100%; height: 100%"
                            src="@/assets/tiles_photos/14.jpg"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HomeTiles",
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
        async createFile(path, fileName) {
            let response = await fetch(path);
            let data = await response.blob();
            let metadata = {
                type: "image/jpeg",
            };
            return new File([data], fileName, metadata);
        },
        submit(clickEvent) {
            var fileName = clickEvent.srcElement.src
                .replace(/^.*[\\/]/, "")
                .split(".")
                .shift();

            this.createFile(clickEvent.srcElement.src, fileName + ".jpg").then(
                (file) => {
                    this.dropFiles.push(file);
                    this.$store.dispatch("postFiles", this);
                }
            );
        },
    },
};
</script>
<style scoped lang="scss">
img {
    transition: 0.5s ease;
}

img:hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    transition: 0.5s ease;
}
</style>

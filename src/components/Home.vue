<template>
    <div class="home">
        <section class="hero is-medium has-bg-img">
            <div class="hero-body">
                <div class="has-text-centered upload-box">
                    <p class="title">Upload your photos</p>
                    <b-upload
                        type="is-primary"
                        v-model="dropFiles"
                        multiple
                        drag-drop
                        expanded
                        @input="onFileChange"
                    >
                        <section class="section">
                            <div class="content has-text-centered">
                                <b-icon icon="upload" size="is-large"> </b-icon>
                                <p>Drag and drop or click</p>
                            </div>
                        </section>
                    </b-upload>
                </div>
                <span v-for="(file, index) in dropFiles" :key="index">
                    <img :src="url" />
                    <button
                        class="delete is-small"
                        type="button"
                        @click="deleteDropFile(index)"
                    ></button>
                </span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            dropFiles: [],
            urls: [],
            url: null,
        };
    },
    methods: {
        deleteDropFile(index) {
            this.dropFiles.splice(index, 1);
        },
        onFileChange(e) {
            const file = e[0];
            console.log(file);
            this.url = URL.createObjectURL(file);
            console.log(this.url);
        },
    },
};
</script>
<style scoped lang="scss">
.home {
    margin-top: -30pt;
}
.has-bg-img {
    background: url("../assets/home_hero_background.jpg") center center;
    background-size: cover;
}
.upload-box {
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 12%;
    padding-top: 70px;
    padding-bottom: 70px; 
    border-radius: 25px;
    float: right; 
    background-color: white;
}
</style>
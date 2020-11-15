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
                    <span v-for="(file, index) in dropFiles" :key="index">
                        <img :src="getURL(file)" />
                        <button
                            class="delete is-small"
                            type="button"
                            style="margin-right: 10px"
                            @click="deleteDropFile(index)"
                        ></button>
                    </span>
                    <b-button
                        :disabled="this.dropFiles.length ? false : true"
                        rounded
                        class="submit-button"
                        type="is-secondary"
                        >Submit</b-button
                    >
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { DialogProgrammatic as Dialog } from "buefy";
export default {
    name: "Home",
    data() {
        return {
            dropFiles: [],
        };
    },
    methods: {
        deleteDropFile(index) {
            this.dropFiles.splice(index, 1);
        },
        getURL(e) {
            return URL.createObjectURL(e);
        },
        checkAmount(e) {
            if (e.length > 5) {
                var to_remove = e.length - 5;
                this.dropFiles.splice(5, to_remove);
                Dialog.alert({
                    title: "Upload Error",
                    message: "You can only upload up to <b>5 images</b> at once",
                    type: "is-danger",
                    hasIcon: true,
                    icon: "alert-circle-outline",
                });
            }
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
    padding-top: 60px;
    padding-bottom: 30px;
    border-radius: 25px;
    float: right;
    background-color: white;
    width: 500px;
    max-width: 500px;
    height: 470px;
    max-heigt: 470px;
    position: relative;
}
.submit-button {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 213px;
    margin-bottom: 20px;
}
img {
    height: 40pt;
    width: 40pt;
}
</style>

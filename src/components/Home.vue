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
                        @click="submitUserFiles"
                        >Submit</b-button
                    >
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { DialogProgrammatic as Dialog } from "buefy";
const ModalForm = {
    props: ["dropFiles", "getURL"],
    template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">{{ $parent.$store.getters.predictStatus == 'request' ? 'Predicting your images 🔎' : 'Your results 🎉' }}</p>
                    </header>
                    <section class="modal-card-body">
                        <div v-if="$parent.$store.getters.predictStatus == 'request'"  style=" display: flex; flex-direction: row">
                            <span v-for="i in dropFiles.length" :key="i" style="margin: 0 auto">
                                <div style="margin: 20px">
                                    <b-skeleton width="200px" height="150px"></b-skeleton>
                                </div>
                            </span>
                        </div>
                        <div v-else  style=" display: flex; flex-direction: row">
                            <span v-for="file in dropFiles" style="margin: 0 auto">
                                <div class="has-text-centered" style="margin: 20px">
                                    <p style="font-weight: bold; margin-bottom: 7px; text-transform: uppercase">{{ $parent.$store.getters.predictions[file.name] }}</p>
                                    <img style="width: 200px; height: 150px" :src="getURL(file)"/>
                                </div>
                            </span>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$emit('close')">Close</button>
                    </footer>
                </div>
            </form>
        `,
};
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
        validateFiles() {
            var files_size = 0;
            var file_size_error = false;
            var file_type_error = false;
            var dialog_message = "";

            for (const file of this.dropFiles) {
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
        submitUserFiles() {
            try {
                this.validateFiles();
            } catch (error) {
                return;
            }
            var fd = new FormData();
            for (const file_to_append of this.dropFiles) {
                fd.append(file_to_append.name, file_to_append);
            }
            this.$store.dispatch("postFiles", fd);
            this.$buefy.modal.open({
                parent: this,
                props: {
                    dropFiles: this.dropFiles,
                    getURL: this.getURL,
                },
                component: ModalForm,
                hasModalCard: true,
                trapFocus: true,
                width: "100%",
            });
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
    max-height: 470px;
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

<template>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    {{
                        predictStatus == "request"
                            ? "Predicting your images 🔎"
                            : "Your results 🎉"
                    }}
                </p>
            </header>
            <section class="modal-card-body">
                <div
                    v-if="predictStatus == 'request'"
                    style="display: flex; flex-direction: row"
                >
                    <span v-for="i in dropFiles.length" :key="i" style="margin: 0 auto">
                        <div style="margin: 20px">
                            <b-skeleton width="300px" height="225px"></b-skeleton>
                        </div>
                    </span>
                </div>
                <div v-else style="display: flex; flex-direction: row">
                    <span
                        v-for="(file, index) in dropFiles"
                        :key="index"
                        style="margin: 0 auto"
                    >
                        <div class="has-text-centered" style="margin: 20px">
                            <p
                                style="
                                    font-weight: bold;
                                    margin-bottom: 7px;
                                    text-transform: uppercase;
                                "
                            >
                                {{ predictions[file.name] }}
                            </p>
                            <img
                                style="width: 300px; height: 225px"
                                :src="getURL(file)"
                            />
                        </div>
                    </span>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$emit('close')">
                    Close
                </button>
            </footer>
        </div>
    </form>
</template>
<script>
export default {
    name: "PredictionDialog",
    methods: {
        getURL(e) {
            return URL.createObjectURL(e);
        },
    },
    computed: {
        dropFiles: {
            get() {
                return this.$store.getters.dropFiles;
            },
        },
        predictStatus: {
            get() {
                return this.$store.getters.predictStatus;
            },
        },
        predictions: {
            get() {
                return this.$store.getters.predictions;
            },
        },
    },
};
</script>
<style scoped></style>

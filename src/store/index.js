import Vue from "vue";
import Vuex from "vuex";
import file_upload from "./modules/file_upload";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        file_upload,
    },
});

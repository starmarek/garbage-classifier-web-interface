import { api } from "@/services/api";

const state = {
    status: "",
    prediction: "",
};

const getters = {
    predictStatus: (state) => state.status,
    predictions: (state) => state.prediction,
};

const actions = {
    postFiles({ commit }, files) {
        commit("PREDICTION_REQUEST");
        try {
            api.post("predict", files, {
                timeout: 10000,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((resp) => {
                console.log(resp);
                console.log(resp.data);
                commit("PREDICTION_SUCCESS", resp.data);
            });
        } catch (error) {
            console.log(error);
        }
    },
};

const mutations = {
    PREDICTION_SUCCESS(state, prediction) {
        state.prediction = prediction;
        state.status = "success";
    },
    PREDICTION_REQUEST(state) {
        state.status = "request";
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

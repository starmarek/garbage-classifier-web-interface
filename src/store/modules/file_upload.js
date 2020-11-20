import { api } from "@/services/api";
import PredictionDialog from "@/components/PredictionDialog";
import { ModalProgrammatic as Modal } from "buefy";

const state = {
    status: "",
    prediction: "",
    dropFiles: [],
};

const getters = {
    predictStatus: (state) => state.status,
    predictions: (state) => state.prediction,
    dropFiles: (state) => state.dropFiles,
};

const actions = {
    postFiles({ commit, getters }, parentForPredictionModal) {
        var fd = new FormData();
        for (const file_to_append of getters.dropFiles) {
            fd.append(file_to_append.name, file_to_append);
        }
        commit("PREDICTION_REQUEST");
        try {
            api.post("predict", fd, {
                timeout: 10000,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((resp) => {
                console.log(resp);
                commit("PREDICTION_SUCCESS", resp.data);
            });
        } catch (error) {
            console.log(error);
        }
        Modal.open({
            parent: parentForPredictionModal,
            component: PredictionDialog,
            hasModalCard: true,
            trapFocus: true,
            width: "100%",
        }).$on("close", () => {
            commit("updateDropFiles", []);
        });
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
    updateDropFiles(state, value) {
        state.dropFiles = value;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

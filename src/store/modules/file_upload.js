import { api } from "@/services/api";

const state = {
    rowData: [],
};

const getters = {
    // isAuthenticated: (state) => !!state.access_token,
    // authStatus: (state) => state.status,
    // refreshTok: (state) => state.refresh_token,
};

const actions = {
    postFiles({ commit }, files) {
        try {
            api.post("predict", files, {
                timeout: 10000,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((resp) => {
                console.log(resp);
                commit("POST_FILE", files);
            });
        } catch (error) {
            console.log(error);
        }
    },
};

const mutations = {
    POST_FILE(state, newFile) {
        state.rowData.push(newFile);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

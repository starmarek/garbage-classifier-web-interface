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
    loadFiles({ commit }) {
        api.get("files/")
            .then((data) => {
                let rowData = data.data;
                commit("SET_FILES", rowData);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    postFiles({ dispatch, commit }, files) {
        const config = {
            onUploadProgress(e) {
                // eslint-disable-next-line no-unused-vars
                var percentCompleted = Math.round((e.loaded * 5000) / e.total);
            },
        };
        try {
            api.post("files/", files, config, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then(() => {
                    commit("POST_FILE", files);
                })
                .then(() => {
                    dispatch("loadFiles");
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
    SET_FILES(state, files) {
        state.rowData = files;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

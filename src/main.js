import Vue from "vue";
import App from "@/App.vue";

import Buefy from "buefy";
import "@mdi/font/css/materialdesignicons.css";
import store from "@/store";
import router from "@/router";

Vue.filter("capitalize", function (value) {
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.config.productionTip = false;

Vue.use(Buefy);

const vue = new Vue({
    router,
    store,
    render: (h) => h(App),
});

vue.$mount("#app");

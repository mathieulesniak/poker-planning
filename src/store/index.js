import Vue from "vue";
import Vuex from "vuex";
import card from "./modules/card";
import app from "./app";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);
console.log("HERE");
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    card,
    // products
    app
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

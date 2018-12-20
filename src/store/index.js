import Vue from "vue";
import Vuex from "vuex";
import card from "./modules/card";
import app from "./app";
import socket from "./modules/socket";
import createLogger from "vuex/dist/logger";
import { createSocketioPlugin } from 'vuex-socketio-plugin'


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    card,
    // products
    socket,
    app
  },
  strict: debug,
  mutations: {},
  plugins: [createLogger(), createSocketioPlugin('http://localhost:3333')],
});

const state = {
  snackbar: {
    show: false,
    content: "",
    icon: null,
    type: null
  },
  alert: {
    show: false,
    title: "",
    content: ""
  }
};

const getters = {
};

const mutations = {
  SET_APP_SNACKBAR(state, payload) {
    if (payload === undefined || payload.message === "") {
      state.snackbar = {
        ...state.snackbar,
        show: false,
        content: "",
        icon: null,
        type: null
      };
    } else {
      state.snackbar = {
        ...state.snackbar,
        show: true,
        content: payload.message,
        icon: payload.icon,
        type: payload.type
      };
    }
  },
  SOCKET_CONNECT(state, { client }) {
    console.log('connected')
    _client = client;
  },
  SET_APP_ALERT(state, payload) {
    if (payload === undefined || payload.title === "") {
      state.alert = {
        ...state.alert,
        show: false,
        title: "",
        content: ""
      };
    } else {
      state.alert = {
        ...state.alert,
        show: true,
        content: payload.content,
        title: payload.title
      };
    }
  }
};

const actions = {
  setSnackbar({ commit }, payload) {
    commit("SET_APP_SNACKBAR", payload);
  },
  setSnackBarError({ commit }, message) {
    commit("SET_APP_SNACKBAR", { type: "error", icon: "thumb_down", message });
  },
  setAlert({ commit }, payload) {
    commit("SET_APP_ALERT", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

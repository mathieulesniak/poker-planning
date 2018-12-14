const GphApiClient = require('giphy-js-sdk-core')

const state = {
  selected: null,
  cardCover: null
};

const getters = {};

const mutations = {
  SELECT_CARD(state, card) {
    state.selected = card;
  },
  SET_GIF(state, gifUrl) {
    state.cardCover = gifUrl;
  }
};

const actions = {
  select({ commit }, payload) {
    commit("SELECT_CARD", payload.value);
  },
  fetchGif({ commit }) {
    const client = GphApiClient("cu2iiW61szM1F0YgoX5yReZYu7PIZhGI")
    client.random("gifs", {})
      .then(response => {
        console.log(response.data);
        commit("SET_GIF", response.data.images.original.gif_url);
      })
      .catch((err) => {
        console.log("ERROR", err);
      })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

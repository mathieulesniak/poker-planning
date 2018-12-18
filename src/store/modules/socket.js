

const state = {};

const getters = {};

const mutations = {};

const actions = {
  setNick({ commit }, payload) {
    
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

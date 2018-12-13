const state = {
  selected: null,
};

const getters = {};

const mutations = {
  SELECT_CARD(state, card) {
    state.selected = card;
  }
};

const actions = {
  select({ commit }, payload) {
    commit("SELECT_CARD", payload.value);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

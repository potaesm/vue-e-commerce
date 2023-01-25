const state = {
  UsMovement: {
    Search: [],
    Cart: [],
    Items: []
  }
};

const getters = {
  AllUserMovement: (state) => state.UsMovement
};

const actions = {
  async SetUserMovemnetSearch({ commit }, data) {
    commit('SetUserMOvementSearch', data);
  },
  async SetUserMovemnetCart({ commit }, data) {
    commit('SetUserMOvementCart', data);
  },
  async SetUserMovemnetItem({ commit }, data) {
    commit('SetUserMOvementItem', data);
  }
};

const mutations = {
  // Search
  SetUserMOvementSearch: (state, newusmovesearch) => state.UsMovement.Search.unshift(newusmovesearch),
  // cart
  SetUserMOvementCart: (state, newusmovecart) => (state.UsMovement.cart = newusmovecart),
  // items
  SetUserMOvementItem: (state, newusmoveItems) => state.UsMovement.Items.unshift(newusmoveItems)
};

export default {
  state,
  getters,
  actions,
  mutations
};

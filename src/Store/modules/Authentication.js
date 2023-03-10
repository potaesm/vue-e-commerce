const state = {
  IsAuthenticated: { isLogedIN: false, isAdmin: false }
};

const getters = {
  UserAuth: (state) => state.IsAuthenticated
};

const actions = {
  async SetUserAuth({ commit }, data) {
    // this data will inculde if user is logedin and if is user Admin
    let newStatus = { isLogedIN: data.isLogedIN, isAdmin: data.isAdmin };
    localStorage.setItem('Auth', JSON.stringify(newStatus));
    commit('SetAndGetUserAuthStuts', newStatus);
  },
  async GetUserAuth({ commit }) {
    if (localStorage.getItem('Auth')) {
      let AuthData = JSON.parse(localStorage.getItem('Auth'));
      commit('SetAndGetUserAuthStuts', AuthData);
    }
  }
};

const mutations = {
  SetAndGetUserAuthStuts: (state, UserAuthStauts) => ((state.IsAuthenticated.isAdmin = UserAuthStauts.isAdmin), (state.IsAuthenticated.isLogedIN = UserAuthStauts.isLogedIN))
};

export default {
  state,
  getters,
  actions,
  mutations
};

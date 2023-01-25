const state = {
  CateGorisList: [],
  non: ''
};

const getters = {
  allCategories: (state) => state.CateGorisList
};

const actions = {
  async GetCategories({ commit }) {
    const newCatdata = [
      { id: '11', name: 'phones C' },
      { id: '22', name: 'computers C' },
      { id: '33', name: 'shirts C' },
      { id: '44', name: 'shoes C' },
      { id: '55', name: 'cameras C' },
      { id: '66', name: 'cars C' }
    ];
    commit('setCategories', newCatdata);
  },
  async GetCatBYPageNumBer({ commit }) {
    const newCatdata = [
      { id: '77', name: 'phones p' },
      { id: '88', name: 'computers p' },
      { id: '99', name: 'shirts p' },
      { id: '100', name: 'shoes p' },
      { id: '101', name: 'cameras p' },
      { id: '102', name: 'cars p' }
    ];
    commit('setCategories', newCatdata);
  },
  async ADD_NEW_CAT({ commit }, data) {
    let NewDataArr = {};
    let newID = Math.floor(Math.random() * 50) + 10;
    NewDataArr = { id: newID, name: data.NewCatName };
    commit('NewCategories', NewDataArr);
  },
  async EditOneCat({ commit }, data) {
    let objIndex = state.CateGorisList.findIndex((obj) => obj.id == data.ID);
    let name = data.name;
    let NewDatObj = { objIndex, name };
    commit('EditOneCategories', NewDatObj);
  },
  async DeleteOneCat({ commit }, data) {
    let newArrDel = state.CateGorisList.filter((x) => {
      return x.id != data.ID;
    });
    commit('ReSetAndDelete', newArrDel);
  },
  async GetCatByID({ commit }, ID) {
    let item = state.CateGorisList.filter((x) => x.id == ID);
    //console.log('item id', Id, item )
    commit('non');
    return item;
  }
};

const mutations = {
  setCategories: (state, categories) => (state.CateGorisList = categories),
  NewCategories: (state, newData) => state.CateGorisList.unshift(newData),
  EditOneCategories: (state, NewDatObj) => (state.CateGorisList[NewDatObj.objIndex].name = NewDatObj.name),
  ReSetAndDelete: (state, newArrDel) => (state.CateGorisList = newArrDel),

  non: (state) => (state.non = '')
};

export default {
  state,
  getters,
  actions,
  mutations
};

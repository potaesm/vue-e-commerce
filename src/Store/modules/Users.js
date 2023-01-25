const state = {
  UsersList: [
    { id: 5, name: 'ahmed', isAdmin: true, imgSrc: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' },
    { id: 6, name: 'hoda', isAdmin: false, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mZmMcQKh388FZtY7ZLydeYeIEboJZv3zUw&usqp=CAU' },
    { id: 7, name: 'mohamed', isAdmin: true, imgSrc: 'https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' },
    { id: 8, name: 'soki', isAdmin: false, imgSrc: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg' },
    { id: 9, name: 'mod', isAdmin: true, imgSrc: 'https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' },
    { id: 10, name: 'rana', isAdmin: false, imgSrc: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg' }
  ]
};

const getters = {
  AllUsers: (state) => state.UsersList
};

const actions = {
  async GetUserList({ commit }) {
    const NewUserListData = [
      { id: 11, name: 'ahmed p', isAdmin: true, imgSrc: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' },
      { id: 12, name: 'hoda p', isAdmin: false, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mZmMcQKh388FZtY7ZLydeYeIEboJZv3zUw&usqp=CAU' },
      { id: 13, name: 'mohamed p', isAdmin: true, imgSrc: 'https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' },
      { id: 14, name: 'soki p', isAdmin: false, imgSrc: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg' },
      { id: 15, name: 'mod p', isAdmin: true, imgSrc: 'https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' },
      { id: 16, name: 'rana p', isAdmin: false, imgSrc: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg' }
    ];
    commit('SetUserList', NewUserListData);
  },
  async GetUsByPNum({ commit }, PageNum) {
    console.log('page num', PageNum);
    const NewUsDataArr = [
      { id: 17, name: 'ahmed x', isAdmin: true, imgSrc: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' },
      { id: 18, name: 'hoda x', isAdmin: false, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mZmMcQKh388FZtY7ZLydeYeIEboJZv3zUw&usqp=CAU' },
      { id: 19, name: 'mohamed x', isAdmin: true, imgSrc: 'https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' },
      { id: 20, name: 'soki x', isAdmin: false, imgSrc: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg' },
      { id: 21, name: 'mod x', isAdmin: true, imgSrc: 'https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' },
      { id: 22, name: 'rana x', isAdmin: false, imgSrc: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg' }
    ];
    commit('SetUserList', NewUsDataArr);
  },
  async EditOneUser({ commit }, data) {
    let objIndex = state.UsersList.findIndex((obj) => obj.id == data.ID);
    let isAdmin = data.isAdmin;
    let NewDatOBJ = { objIndex, isAdmin };
    commit('EditOneUser', NewDatOBJ);
  }
};

const mutations = {
  SetUserList: (state, data) => (state.UsersList = data),
  EditOneUser: (state, newData) => (state.UsersList[newData.objIndex].isAdmin = newData.isAdmin)
};

export default {
  state,
  getters,
  actions,
  mutations
};

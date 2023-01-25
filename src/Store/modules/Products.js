const state = {
  ProductsList: [
    {
      id: '12',
      CatID: '11',
      name: 'i Phone 11 Pro',
      desc: 'iphoe 11 pro back',
      price: '599',
      imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'
    },
    { id: '14', CatID: '11', name: 'Huawei', desc: 'Huawei Huawei', price: '1000', imgSrc: 'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg' },
    { id: '16', CatID: '33', name: 'nike shirt', desc: 'red nike shirt', price: '12', imgSrc: 'https://cdn.shopify.com/s/files/1/0430/7540/3941/products/G_76G130_023_F_a893dabf-8afd-4d6b-84e5-81b0e556c64a.jpg?v=1657508287' },
    {
      id: '18',
      CatID: '22',
      name: 'temperland shirt',
      desc: 'black templerland shirt',
      price: '20',
      imgSrc:
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    },
    { id: '20', CatID: '33', name: 'addidas shirt', desc: 'addidas wight shirt', price: '13', imgSrc: 'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg' },
    { id: '24', CatID: '44', name: 'nike shose', desc: 'black nike shose', price: '50', imgSrc: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682' },
    { id: '26', CatID: '55', name: 'nikon Camera', desc: 'nikon camera description', price: '2400', imgSrc: 'https://www.nikon.co.in/media/homepage/Z9_0001_Hero-Image-Store-View-_white_.jpg' },
    { id: '28', CatID: '66', name: 'Samsong Watch', desc: 'samsong Glaxey Watch', price: '5', imgSrc: 'https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$' }
  ],
  // ProdListByPageNum:[],
  non: ''
};

const getters = {
  AllProducs: (state) => state.ProductsList
};

const actions = {
  async GetProducts({ commit }) {
    const newProdData = [
      {
        id: '12',
        CatID: '11',
        name: 'N i Phone 11 Pro',
        desc: 'iphoe 11 pro back',
        price: '599',
        imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'
      },
      { id: '14', CatID: '11', name: 'N Huawei', desc: 'Huawei Huawei', price: '1000', imgSrc: 'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg' },
      { id: '16', CatID: '33', name: 'N nike shirt', desc: 'red nike shirt', price: '12', imgSrc: 'https://cdn.shopify.com/s/files/1/0430/7540/3941/products/G_76G130_023_F_a893dabf-8afd-4d6b-84e5-81b0e556c64a.jpg?v=1657508287' },
      {
        id: '18',
        CatID: '22',
        name: 'N temperland shirt',
        desc: 'black templerland shirt',
        price: '20',
        imgSrc:
          'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
      },
      { id: '20', CatID: '33', name: 'N addidas shirt', desc: 'addidas wight shirt', price: '13', imgSrc: 'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg' },
      { id: '24', CatID: '44', name: 'N nike shose', desc: 'black nike shose', price: '50', imgSrc: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682' },
      { id: '26', CatID: '55', name: 'N nikon Camera', desc: 'nikon camera description', price: '2400', imgSrc: 'https://www.nikon.co.in/media/homepage/Z9_0001_Hero-Image-Store-View-_white_.jpg' },
      { id: '28', CatID: '66', name: 'N Samsong Watch', desc: 'samsong Glaxey Watch', price: '5', imgSrc: 'https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$' }
    ]; // in real word you shuld return the respnose data from http srver
    commit('setProducts', newProdData);
  },
  async GetProdByID({ commit }, ID) {
    let itemINDEX = state.ProductsList.filter((x) => x.id == ID);
    commit('non');
    return itemINDEX;
  },
  async GetProdByPageNumber({ commit }, pageNum) {
    console.log('pn', pageNum);
    const NewProdDataArr = [
      {
        id: '12',
        CatID: '11',
        name: 'PN i Phone 11 Pro',
        desc: 'iphoe 11 pro back',
        price: '599',
        imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'
      },
      { id: '14', CatID: '11', name: 'PN Huawei', desc: 'Huawei Huawei', price: '1000', imgSrc: 'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg' },
      { id: '16', CatID: '33', name: 'PN nike shirt', desc: 'red nike shirt', price: '12', imgSrc: 'https://cdn.shopify.com/s/files/1/0430/7540/3941/products/G_76G130_023_F_a893dabf-8afd-4d6b-84e5-81b0e556c64a.jpg?v=1657508287' },
      {
        id: '18',
        CatID: '22',
        name: 'PN temperland shirt',
        desc: 'black templerland shirt',
        price: '20',
        imgSrc:
          'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
      },
      { id: '20', CatID: '33', name: 'PN addidas shirt', desc: 'addidas wight shirt', price: '13', imgSrc: 'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg' },
      { id: '24', CatID: '44', name: 'PN nike shose', desc: 'black nike shose', price: '50', imgSrc: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682' },
      { id: '26', CatID: '55', name: 'PN nikoPN Camera', desc: 'nikoPN camera description', price: '2400', imgSrc: 'https://www.nikon.co.in/media/homepage/Z9_0001_Hero-Image-Store-View-_white_.jpg' },
      { id: '28', CatID: '66', name: 'PN Samsong Watch', desc: 'samsong Glaxey Watch', price: '5', imgSrc: 'https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$' }
    ]; // ..
    commit('SetProdByPageNum', NewProdDataArr);
  },
  async ADD_NEW_PRODUCT({ commit }, data) {
    let NewDataArr = {};
    let newID = Math.floor(Math.random() * 50) + 10;
    NewDataArr = { id: newID, name: data.name, CatID: data.CatID, desc: data.desc, price: data.price, imgSrc: data.imgSrc };

    commit('NewProducts', NewDataArr);
  },
  async EditOneProd({ commit }, data) {
    let objIndex = state.ProductsList.findIndex((obj) => obj.id == data.ID);
    let name = data.name;
    let CatID = data.CatID;
    let desc = data.desc;
    let price = data.price;
    let imgSrc = data.imgSrc;
    let NewDatObj = { objIndex, name, CatID, desc, price, imgSrc };

    commit('EditOneProduct', NewDatObj);
  },
  async DeleteOneProd({ commit }, data) {
    let newArrDel = state.ProductsList.filter((x) => {
      return x.id != data.ID;
    });
    commit('ReSetAndDelete', newArrDel);
  }
};

const mutations = {
  // work with Products List
  setProducts: (state, newProdData) => (state.ProductsList = newProdData),
  // new prod
  NewProducts: (state, newprod) => state.ProductsList.unshift(newprod),
  // edit prod
  EditOneProduct: (state, NewDatObj) => (
    (state.ProductsList[NewDatObj.objIndex].name = NewDatObj.name),
    (state.ProductsList[NewDatObj.objIndex].CatID = NewDatObj.CatID),
    (state.ProductsList[NewDatObj.objIndex].desc = NewDatObj.desc),
    (state.ProductsList[NewDatObj.objIndex].price = NewDatObj.price),
    (state.ProductsList[NewDatObj.objIndex].imgSrc = NewDatObj.imgSrc)
  ),
  // delete prod
  ReSetAndDelete: (state, newArrDel) => (state.ProductsList = newArrDel),
  // set prod by page num
  SetProdByPageNum: (state, NewProdDataArr) => (state.ProductsList = NewProdDataArr),
  // donse not do any thing
  non: (state) => (state.non = '')
};

export default {
  state,
  getters,
  actions,
  mutations
};

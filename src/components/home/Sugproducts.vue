<template>
  <div>
    <div class="center">
      <h3 class="hS" v-if="BigData.length > 0">Items that You may Like</h3>
    </div>
    <div class="container">
      <transition-group name="fade" tag="div" class="row" v-if="isLoad">
        <div class="col" v-for="item in BigData" :key="item.id">
          <div class="card">
            <img class="card-img-top" :src="item.imgSrc" />
            <div class="card-block">
              <router-link :to="{ path: '/SpecificItem', query: { ID: item.id } }" class="card-title vx">
                <h6>
                  {{ $filters.capitalize(item.name) }}
                </h6>
              </router-link>

              <p class="card-text">Price $:{{ item.price }}</p>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SugProductsComponent',
  data() {
    return {
      BigData: [],
      isLoad: Boolean
    };
  },
  created() {
    setTimeout(() => {
      let Arr = [
        {
          id: '12',
          name: 'i Phone 11 Pro',
          desc: 'iphoe 11 pro back',
          price: '599',
          imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'
        },
        { id: '14', name: 'Huawei', desc: 'Huawei Huawei', price: '1000', imgSrc: 'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg' },
        { id: '16', name: 'nike shirt', desc: 'red nike shirt', price: '12', imgSrc: 'https://cdn.shopify.com/s/files/1/0430/7540/3941/products/G_76G130_023_F_a893dabf-8afd-4d6b-84e5-81b0e556c64a.jpg?v=1657508287' },
        {
          id: '18',
          name: 'temperland shirt',
          desc: 'black templerland shirt',
          price: '20',
          imgSrc:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
        },
        { id: '20', name: 'addidas shirt', desc: 'addidas wight shirt', price: '13', imgSrc: 'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg' },
        { id: '24', name: 'nike shose', desc: 'black nike shose', price: '50', imgSrc: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682' },
        { id: '26', name: 'nikon Camera', desc: 'nikon camera description', price: '2400', imgSrc: 'https://www.nikon.co.in/media/homepage/Z9_0001_Hero-Image-Store-View-_white_.jpg' },
        { id: '28', name: 'Samsong Watch', desc: 'samsong Glaxey Watch', price: '5', imgSrc: 'https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$' },
        {
          id: '30',
          name: 'Mintra School Backpacks For Unisex - Light Blue',
          desc: 'Brand: MintraType: School School BackpackssColor: Light BlueTargeted Group: Unisex',
          price: '33',
          imgSrc: 'https://cdn.shopify.com/s/files/1/1741/0907/products/backpack_mintra_l_sbl_1024x1024.png?v=1584818795'
        }
      ];

      const shuffled = Arr.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 5);
      this.BigData = selected;
      this.isLoad = true;
      console.log('data x', this.BigData);
    }, 5000);
  }
};
</script>

<style scoped>
.card {
  width: 10rem;
  padding: 20px;
}

.card > img {
  height: 100px;
  width: 100px;
}

.col {
  margin: 1%;
  margin-left: auto;
  margin-right: auto;
  width: 10em;
}

.vx:hover {
  cursor: pointer;
  color: darkred;
}

.hS {
  background: beige;
  padding: 3px;
  font-family: monospace;
  font-style: oblique;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

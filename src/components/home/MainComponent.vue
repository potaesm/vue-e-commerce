<template>
  <div>
    <Sugproducts />

    <hr />

    <div class="center">
      <div class="col-md-2" style="float: left; margin: 1px 2%">
        <Categoryes v-on:CheckCat="CheckTheCat" />
      </div>
      <div class="col-md-3"></div>

      <div class="col-md-9">
        <div class="container">
          <div class="card-group">
            <div class="row" v-if="isLoaded">
              <!-- <transition-group name="fade" tag="div" class="row"> -->

              <div class="card col-md-4" v-for="(item, index) in items" :key="item.id">
                <img class="card-img-top" :src="item.imgSrc" :alt="item.name" />
                <div class="card-body">
                  <h6>Price: ${{ item.price }}</h6>

                  <router-link :to="{ path: '/Specificitem', query: { ID: item.id } }" class="card-title vx">
                    <h5>
                      {{ $filters.MaxName(item.name) }}
                    </h5>
                  </router-link>

                  <button v-if="item.isincart" v-on:click="RemoveFromCart(item.id, index)" class="btn btn-danger">
                    <small>Remove From Cart</small>
                  </button>
                  <button v-else class="btn btn-primary" v-on:click="AddToCart(item.id, index)">Add To Cart</button>
                </div>
              </div>
            </div>
            <!-- </transition-group> -->
          </div>
        </div>

        <hr />
        <div class="container wid">
          <div class="row">
            <nav aria-label="Page navigation  ">
              <ul class="pagination">
                <li class="page-item">
                  <button class="page-link" v-on:click="NextPrevPage(false)">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </button>
                </li>

                <li class="page-item" v-for="(page, idx) in PageArray" :key="idx">
                  <button :class="PageSelected === page ? 'page-link active' : 'page-link '" v-on:click="changePage(page)">{{ page }}</button>
                </li>

                <li class="page-item">
                  <button class="page-link" v-on:click="NextPrevPage(true)">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <!-- <hr> -->
      <!-- <div class="clear xp"></div> -->
    </div>
    <div class="clear xp"></div>
  </div>
</template>

<script>
import Categoryes from './Categoryes';
import Sugproducts from './Sugproducts';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainComponent',
  data() {
    return {
      items: [],
      PageArray: [],
      PageSelected: 3,
      CheckedCat: [],
      isLoaded: true
    };
  },
  components: {
    Categoryes,
    Sugproducts
  },
  computed: {
    ...mapGetters(['AllProducs'])
  },
  created() {
    this.GetProducts();
  },
  mounted() {
    // push route start
    if (!this.$route.query.page) {
      this.$router
        .push({
          path: '/',
          name: 'Main',
          query: {
            page: 1
          }
        })
        .catch(() => {});
    }
    this.PageSelected = parseInt(this.$route.query.page);
    //
    this.getProddata();
    this.PageNation();
  },
  methods: {
    // vux
    ...mapActions(['GetProducts', 'GetProdByPageNumber', 'ChecIfINCart', 'SetNewCartItem', 'RemoveItemFromCart']),
    // vux end
    getProddata() {
      this.isLoaded = false;
      let data = [];
      data = this.AllProducs;
      for (let index = 0; index < data.length; index++) {
        const ElId = data[index].id;
        this.ChecIfINCart(ElId).then((res) => {
          console.log('d', res);
          let objIndex = data.findIndex((obj) => obj.id == ElId);
          data[objIndex].isincart = res;
          this.isLoaded = true;
        });
      }
      console.log('data', data);
      this.items = data;
    },
    AddToCart(id, index) {
      this.isLoaded = false;
      this.items[index].isincart = true;
      this.isLoaded = true;
      this.SetNewCartItem(id);
      this.getProddata();
    },
    RemoveFromCart(id, index) {
      this.isLoaded = false;
      this.items[index].isincart = false;
      this.isLoaded = true;
      this.RemoveItemFromCart(id);
      this.getProddata();
    },
    PageNation() {
      this.PageArray = [];
      let Scale = this.PageSelected + 3;
      for (let index = this.PageSelected; index < Scale; index++) {
        this.PageArray.push(index);
      }
      console.log('pagenation', this.PageArray);
      this.getProddata();
    },
    changePage(page) {
      this.GetProdByPageNumber(page);
      this.PageSelected = page;
      this.$router.push({
        path: '/',
        name: 'Main',
        query: {
          page: page
        }
      });
      this.getProddata();
    },
    NextPrevPage(con) {
      if (con == false && this.PageSelected == 1) {
        console.log('non');
      }
      if (con == false && this.PageSelected !== 1) {
        this.PageSelected = this.PageSelected - 1;
        this.changePage(this.PageSelected);
        this.PageNation();
        this.getProddata();
        console.log('n', this.PageSelected);
      }
      if (con == true) {
        this.PageSelected = this.PageSelected + 1;
        this.changePage(this.PageSelected);
        this.PageNation();
        this.getProddata();
        console.log('n ', this.PageSelected);
      }
    },
    CheckTheCat(cat) {
      console.log('main vue cat id', cat);
      if (this.CheckedCat.indexOf(cat) === -1) {
        this.CheckedCat.push(cat);
      } else {
        this.CheckedCat = this.CheckedCat.filter((e) => e !== cat);
      }
      console.log('cat id list', this.CheckedCat);
      this.items = [
        {
          id: '12',
          name: 'Cat i Phone 11 Pro s',
          desc: 'iphoe 11 pro back',
          price: '599',
          imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418'
        },
        { id: '14', name: 'Cat Huawei s', desc: 'Huawei Huawei', price: '1000', imgSrc: 'https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg' },
        { id: '16', name: 'Cat nike shirt s', desc: 'red nike shirt', price: '12', imgSrc: 'https://cdn.shopify.com/s/files/1/0430/7540/3941/products/G_76G130_023_F_a893dabf-8afd-4d6b-84e5-81b0e556c64a.jpg?v=1657508287' },
        {
          id: '18',
          name: 'Cat temperland shirt',
          desc: 'black templerland shirt',
          price: '20',
          imgSrc:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
        },
        { id: '20', name: 'Cat addidas shirt', desc: 'addidas wight shirt', price: '13', imgSrc: 'https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg' },
        { id: '24', name: 'Cat nike shose', desc: 'black nike shose', price: '50', imgSrc: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682' },
        { id: '26', name: 'Cat nikon Camera', desc: 'nikon camera description', price: '2400', imgSrc: 'https://www.nikon.co.in/media/homepage/Z9_0001_Hero-Image-Store-View-_white_.jpg' },
        { id: '28', name: 'Cat Samsong Watch', desc: 'samsong Glaxey Watch', price: '5', imgSrc: 'https://images.samsung.com/is/image/samsung/assets/in/2208/pcd/watches/Galaxy_Watch5_mo.png?$264_264_PNG$' }
      ];
    }
  }
};
</script>

<style scoped>
.card {
  /* padding: 1%; */
  margin: 1% auto;
}
.wid {
  margin-left: auto;
  margin-right: auto;
  width: 10em;
}

.active,
.active:hover {
  background-color: #f44336;
  color: white;
}

.vx:hover {
  cursor: pointer;
  color: darkred;
}
.card > img {
  width: 100%;
  height: 12rem;
  margin: 3px auto !important;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

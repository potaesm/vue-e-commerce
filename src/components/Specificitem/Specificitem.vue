<template>
  <div>
    <div class="center">
      <div class="card" v-if="isLoad">
        <img class="card-img-top" :src="Resultitems.imgSrc" alt="Card image cap" />
        <div class="card-body">
          <h4 class="card-title">{{ Resultitems.name }}</h4>
          <p class="card-text">{{ Resultitems.desc }}</p>
          <h4>Price : {{ Resultitems.price }}</h4>
          <h4><i class="fas fa-tags"></i> : {{ Resultitems.CatName }}</h4>
          <a class="btn btn-primary" @click="ChangeItemStatus" v-if="!Resultitems.InCard"> Add To Card</a>
          <a class="btn btn-danger" @click="ChangeItemStatus" v-if="Resultitems.InCard"> Remove From Card</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SpecificitemComponent',
  data() {
    return {
      Resultitems: {
        id: '',
        imgSrc: '',
        name: '',
        price: null,
        desc: '',
        CatName: '',
        InCart: true
      },
      isLoad: Boolean
    };
  },
  created() {
    this.Getroutedata();
  },
  methods: {
    ...mapActions(['GetProdByID', 'GetCatByID', 'GetCategories', 'ChecIfINCart', 'SetNewCartItem', 'RemoveItemFromCart', 'SetUserMovemnetItem']),
    async Getroutedata() {
      this.isLoad = false;
      //
      this.GetCategories();
      let ProdID = this.$route.query.ID;
      await this.GetProdByID(ProdID).then((res) => {
        console.log('specfic item', res);
        this.Resultitems.id = ProdID;
        this.Resultitems.name = res[0].name;
        this.Resultitems.desc = res[0].desc;
        this.Resultitems.price = res[0].price;
        this.Resultitems.CatName = res[0].CatName;
        this.Resultitems.imgSrc = res[0].imgSrc;
        this.GetCatByID(res[0].CatID).then((res) => {
          console.log('res', res);
          this.Resultitems.CatName = res[0].name;
        });
      });
      // chec if in card
      await this.ChecIfINCart(ProdID).then((res) => {
        this.Resultitems.InCard = res;
        console.log('res X', res);
        this.isLoad = true;
      });

      // set user movement
      this.SetUserMovemnetItem(ProdID);
    },
    async ChangeItemStatus() {
      this.isLoad = false;
      this.Resultitems.InCard = !this.Resultitems.InCard;
      let ProdID = this.$route.query.ID;

      if (this.Resultitems.InCard) {
        this.SetNewCartItem(ProdID);
        this.isLoad = true;
      } else {
        this.isLoad = true;
        this.RemoveItemFromCart(ProdID);
      }
    }
  }
};
</script>

<style scoped>
.card {
  width: 40%;
  text-align: center;
}

.card > img {
  width: 70% !important;
  margin: 1px auto !important;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

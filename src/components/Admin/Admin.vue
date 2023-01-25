<template>
  <div>
    <!-- <h1>Admin</h1> -->
    <div class="center">
      <div class="container">
        <div class="row">
          <div class="col-md-3 df">
            <div class="list-group">
              <a @click="ChangePage('Users')" :class="ChangeClassAndComponent('Users') ? 'active' : ''" class="list-group-item list-group-item-action v"> Users </a>
              <a @click="ChangePage('Categories')" :class="ChangeClassAndComponent('Categories') ? 'active' : ''" class="list-group-item list-group-item-action v"> Categories </a>
              <a @click="ChangePage('Products')" :class="ChangeClassAndComponent('Products') ? 'active' : ''" class="list-group-item list-group-item-action v"> Products </a>
              <a @click="ChangePage('Chart')" :class="ChangeClassAndComponent('Chart') ? 'active' : ''" class="list-group-item list-group-item-action v"> Chart </a>
            </div>
          </div>

          <transition-group tag="div" name="slide" class="col-md-9 d">
            <Users key="Users" v-if="ChangeClassAndComponent('Users')" />
            <Categories key="Categories" v-if="ChangeClassAndComponent('Categories')" />
            <Chart key="Chart" v-if="ChangeClassAndComponent('Chart')" />
            <Products key="Products" v-if="ChangeClassAndComponent('Products')" />
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from './Categories.vue';
import Chart from './Chart.vue';
import Products from './Products.vue';
import Users from './Users.vue';
export default {
  name: 'AdminComponent',
  data() {
    return {
      Data: [
        { name: 'Users', val: true },
        { name: 'Categories', val: false },
        { name: 'Chart', val: false },
        { name: 'Products', val: false }
      ]
    };
  },
  components: {
    Categories,
    Chart,
    Products,
    Users
  },
  methods: {
    ChangeClassAndComponent: function (PName) {
      for (let index = 0; index < this.Data.length; index++) {
        const element = this.Data[index];
        if (PName == element.name) {
          return element.val;
        }
      }
    },
    ChangePage: function (PageName) {
      let newData = [];
      for (let index = 0; index < this.Data.length; index++) {
        const element = this.Data[index];
        if (PageName == element.name) {
          element.val = !element.Val;
          newData.push(element);
        } else {
          element.val = false;
          newData.push(element);
        }
      }
      this.Data = newData;
    }
  }
};
</script>

<style>
.d {
  font-family: cursive;
  border: 1px solid #2f4f4f1f;
  margin: 1% auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

df {
  border: 1px solid #2f4f4f1f;
  margin: 1% auto;
}
.v {
  cursor: pointer;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

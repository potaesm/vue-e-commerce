<template>
  <div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="item in CategoriesList" :key="item.id">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input v-on:change="checkCat(item.id)" :id="item.id" type="checkbox" class="custom-control-input" />
          <label :for="item.id" class="custom-control-label">{{ item.name }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CategoryesComponent',
  data() {
    return {
      CategoriesList: []
    };
  },
  computed: {
    ...mapGetters(['allCategories'])
  },
  created() {
    this.GetCategories();
  },
  mounted() {
    this.CategoriesList = this.allCategories;
  },
  methods: {
    // vuex
    ...mapActions(['GetCategories']),
    // vuex end
    checkCat(cat) {
      console.log('cat id', cat);
      this.$emit('CheckCat', cat);
    }
  }
};
</script>

<style scoped>
.act {
  background-color: gainsboro;
}
</style>

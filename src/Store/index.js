import { Store } from 'vuex';

import Products from './modules/Products';
import Categories from './modules/Categories';
import Cart from './modules/Cart';
import Authentication from './modules/Authentication';
import UserMovemnet from './modules/UserMovemnet';
import Users from './modules/Users';

// Create Store
export default new Store({
  modules: {
    Products,
    Categories,
    Cart,
    UserMovemnet,
    Authentication,
    Users
  }
});

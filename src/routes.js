import { createRouter, createWebHistory } from 'vue-router';
import MainComponent from './components/home/MainComponent.vue';
import SpecificitemComponent from './components/Specificitem/Specificitem.vue';
import CartComponent from './components/Cart/Cart.vue';
import AdminComponent from './components/Admin/Admin.vue';
import LoginRegister from './components/LoginRegister/LoginRegister.vue';
import UserProfile from './components/UserProfile/UserProfile.vue';
import SearchP from './components/Search/SearchP';

import AuthGarud from './Garuds/AuthGarud';
import LoginRegGarud from './Garuds/LoginRegGarud';
import AdminGard from './Garuds/AdminGard';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainComponent
    },
    {
      path: '/Specificitem',
      name: 'Specificitem',
      component: SpecificitemComponent
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: CartComponent
    },
    {
      path: '/LoginRegister',
      name: 'LoginRegister',
      component: LoginRegister,
      beforeEnter: (to, from, next) => {
        LoginRegGarud(to, from, next);
      }
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile,
      beforeEnter: (to, from, next) => {
        AuthGarud(to, from, next);
      }
    },
    {
      path: '/SearchP',
      name: 'SearchP',
      component: SearchP
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: AdminComponent,
      beforeEnter: (to, from, next) => {
        AdminGard(to, from, next);
      }
    }
  ]
});

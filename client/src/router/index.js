import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import Profile from '@/views/Profile.vue';
import Register from '@/views/Register.vue';
import ShopCart from '@/views/ShopCart.vue';
import ShopCategory from '@/views/ShopCategory.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/categories' },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/product-details',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/cart',
    name: 'ShopCart',
    component: ShopCart,
  },
  {
    path: '/categories',
    name: 'ShopCategory',
    component: ShopCategory,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

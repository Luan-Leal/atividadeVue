import Vue from 'vue';
import VueRouter from 'vue-router';
import loginPage from '@/views/Login-page.vue';
import homePage from '@/views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage,
  },
  {
    path: '/home',
    name: 'home',
    component: homePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

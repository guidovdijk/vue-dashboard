import home from '@/pages/home';
import dashboard from '@/pages/dashboard';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      alias: '/home',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: dashboard,
    },
  ],
});

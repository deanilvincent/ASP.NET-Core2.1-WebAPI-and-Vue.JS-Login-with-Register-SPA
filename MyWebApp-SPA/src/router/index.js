import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import Login from '@/components/user/components/Login'
import Register from '@/components/user/components/Register'
import UserAccount from '@/components/user/components/UserAccount'
import VueRouter from 'vue-router';

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user-account',
    name: 'UserAccount',
    component: UserAccount,
    beforeEnter: ((to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next({ name: 'Home' })
      }
    })
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
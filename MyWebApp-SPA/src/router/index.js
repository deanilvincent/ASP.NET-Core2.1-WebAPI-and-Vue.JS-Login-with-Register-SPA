import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import Login from '@/components/user/components/Login'
import Register from '@/components/user/components/Register'
import UserAccount from '@/components/user/components/UserAccount'

Vue.use(Router)

export default new Router({
  routes: [
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
      component: UserAccount
    }
  ],
  mode: 'history'
})

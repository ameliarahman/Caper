import Vue from 'vue'
import Router from 'vue-router'
import Room from '@/components/Room'
import FBSignInButton from 'vue-facebook-signin-button'
import FBLogin from '@/components/LoginFB'
import FBshare from '@/components/ShareFB'

import '@/assets/semantic/dist/semantic.min.css'
import '@/assets/semantic/dist/jquery.js'
import '@/assets/semantic/dist/semantic.min.js'

Vue.use(Router)
Vue.use(FBSignInButton)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Room',
      component: Room
    },
    {
      path: '/login',
      name: 'fblogin',
      component: FBLogin
    },
    {
      path: '/share',
      name: 'FBshare',
      component: FBshare
    }
  ]
})

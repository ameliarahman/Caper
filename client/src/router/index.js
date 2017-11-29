import Vue from 'vue'
import Router from 'vue-router'
import Room from '@/components/Room'
import FBSignInButton from 'vue-facebook-signin-button'

// import HelloWorld from '@/components/HelloWorld'
import FBLogin from '@/components/LoginFB'

import '@/assets/semantic/dist/semantic.min.css'
import '@/assets/semantic/dist/jquery.js'
import '@/assets/semantic/dist/semantic.min.js'

Vue.use(Router)
Vue.use(FBSignInButton)

export default new Router({
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
    }
  ]
})

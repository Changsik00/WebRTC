import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import WebRTC from '@/components/WebRTC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/connect',
      name: 'WebRTC',
      component: WebRTC
    }
  ]
})

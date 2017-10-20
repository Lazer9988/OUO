import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import WashHome from '@/components/washIndex/washHome'
import washPerCenter from '@/components/washIndex/washPerCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'washHome',
          component: WashHome
        },
        {
          path: '/washPerCenter',
          name: 'washPerCenter',
          component: washPerCenter
        }
      ]
    }
  ]
})

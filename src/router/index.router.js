import Vue from 'vue'
import Router from 'vue-router'
import MainIndex from '@/components/main.index'
import List from '@/views/commonViews/list'
import MainDetail from '@/views/mainViews/detail.main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainIndex
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/mainDetail',
      name: 'mainDetail',
      component: MainDetail
    }
  ]
})

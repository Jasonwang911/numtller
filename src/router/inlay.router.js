import Vue from 'vue'
import Router from 'vue-router'
import InlayIndex from '@/components/inlay.index'
import List from '@/views/commonViews/list'
import InalyDetail from '@/views/inlayViews/detail.inlay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: InlayIndex
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/inlayDetail',
      name: 'inlayDetail',
      component: InalyDetail
    }
  ]
})

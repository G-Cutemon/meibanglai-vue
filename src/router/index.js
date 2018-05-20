import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Brand from '@/components/brand'
import School from '@/components/school'
import Exhibition from '@/components/exhibition'
import News from '@/components/news'
import Recruit from '@/components/recruit'
import Shoptransfer from '@/components/shoptransfer'
import Logistics from '@/components/logistics'
import Service from '@/components/service'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/exhibition',
      name: 'Exhibition',
      component: Exhibition
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/shoptransfer',
      name: 'Shoptransfer',
      component: Shoptransfer
    },
    {
      path: '/logistics',
      name: 'Logistics',
      component: Logistics
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import EventsMainPage from '@/components/EventsMainPage'
import EventsDetailPage from '@/components/EventDetailPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/:event_id',
      name: 'EventsMainPage',
      component: EventsMainPage
    },
    {
      path: '/:event_id/event_detail/:detail_id',
      name: 'EventsDetailPage',
      component: EventsDetailPage
    }
  ]
})

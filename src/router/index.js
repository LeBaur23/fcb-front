import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import EventsMainPage from '@/components/EventsMainPage'
import EventsDetailPage from '@/components/EventDetailPage'
import EventsMainPageIndex from '@/components/EventsMainPageIndex'
import EventsArchivePage from '@/components/EventsArchivePage'

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
      component: EventsMainPage,
      children: [
        {
          path: '',
          name: 'EventsMainPage',
          component: EventsMainPageIndex
        },
        {
          path: 'archive/:archive_year',
          name: 'EventsArchivePage',
          component: EventsArchivePage
        }
      ]
    },
    {
      path: '/:event_id/archive/:archive_year/event_detail/:detail_id',
      name: 'EventsDetailPage',
      component: EventsDetailPage
    }
  ]
})

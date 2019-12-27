import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting

import HomePage from "src/pages/home/home.page.vue"
import ContactPage from "src/pages/other/contact.page"

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [

      { path: '/', component: HomePage },
      { path: '/contact', component: ContactPage },
      { path: '/support', component: ContactPage },

    ]
  })
}

import Vue from 'vue'
import App from './App.vue'

import VueI18n from 'vue-i18n'
import i18n from './util/languages/i18n'

import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'

import {mixin as titleMixin} from './util/mixins/title'
import {mixin as descriptionMixin} from './util/mixins/description'
import {mixin as imagesMix} from './util/mixins/images'
import {mixin as keywordsMixin} from './util/mixins/keywords'

import NetworkHelper from "./util/network-helper"

import * as filters from './util/filters'

// mixin for handling title
Vue.mixin(titleMixin);
Vue.mixin(descriptionMixin);
Vue.mixin(imagesMix);
Vue.mixin(keywordsMixin);

Vue.use(VueI18n);
i18n.i18nInit();

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // prime the store with server-initialized state.
  // the state is determined during SSR and inlined in the page markup.
  if (typeof window !== "undefined" && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
    i18n.i18n.locale = store.state.localization.language;
  }

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    i18n: i18n.i18n,
    router,
    store,
    render: h => h(App)
  });

  app.networkHelper = new NetworkHelper(store);

  store.$app = app;

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}

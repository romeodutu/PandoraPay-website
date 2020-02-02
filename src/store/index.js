import Vue from 'vue'
import Vuex from 'vuex'
import * as cloneDeep from 'lodash/cloneDeep';

import localization from "./modules/localization-store"

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store(cloneDeep({
    
    modules: {

      localization,

    },
    
  }));
}

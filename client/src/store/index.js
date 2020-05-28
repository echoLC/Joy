import Vue from 'vue'
import Vuex from 'vuex'

import state from './global/state'
import mutations from './global/mutations'
import actions from './global/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})



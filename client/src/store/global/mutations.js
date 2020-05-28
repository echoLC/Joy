import * as MutationTypes from './mutation-types'
import localstorageUtils from '@/utils/localstorage'
import {
  TOKEN_STORAGE_KEY
} from '@/configs/Global'

export default {
  [MutationTypes.SET_TOKEN] (state, token) {
    state.token = token
    localstorageUtils.setItem(TOKEN_STORAGE_KEY, token)
  },
  [MutationTypes.REMOVE_TOKEN] (state) {
    state.token = null
    localstorageUtils.remove(TOKEN_STORAGE_KEY)
  },
  [MutationTypes.SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [MutationTypes.REMOVE_USERINFO] (state) {
    state.userInfo = {}
  }
}

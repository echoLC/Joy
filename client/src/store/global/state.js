import {
  TOKEN_STORAGE_KEY
} from '@/configs/Global'
import localstorageUtil from '@/utils/localstorage'

export default {
  // jwt token
  token: localstorageUtil.getItem(TOKEN_STORAGE_KEY),

  userInfo: {}
}


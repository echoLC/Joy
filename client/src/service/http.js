/* utils */
import ky from './ky'
import Store from '@/store'

/* configs */
import { API_BASE_URL } from '@/configs/Global'

/**
 * ky API Docs: https://github.com/sindresorhus/ky#api
 */
export default ky.extend({
  prefixUrl: API_BASE_URL,
  mode: 'cors',
  credentials: 'include',
  // disable retry
  retry: 1,
  hooks: {
    beforeRequest: [
      request => {
        const token = Store.state.token
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      }
    ],
    afterResponse: [
      (request, options, response) => {
        return response
      }
    ]
  }
})

export const baseHttp = ky

/* utils */
import ky from './ky'

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
        request.headers.set('Authorization', 'Bearer 123')
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

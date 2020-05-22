import returnTypeResponse from './responseType'

// request method
const JSON_REQUEST_METHODS = ['post', 'put', 'patch', 'delete']

function createRequestMethods (ky) {
  const oldGet = ky.get.bind(ky)
  ky.get = async function delegatedKyGet (input, query = {}, options = {}) {
    const response = await oldGet(input, {
      ...options,
      searchParams: query
    })
    return returnTypeResponse(response)
  }
  for (const method of JSON_REQUEST_METHODS) {
    const oldMethod = ky[method].bind(ky)
    ky[method] = async function delegatedJSONMethod (input, data = {}, options = {}) {
      const response = await oldMethod(input, {
        ...options,
        json: data
      })
      return returnTypeResponse(response)
    }
  }
  return ky
}

export default function enhanceKy (ky) {
  for (const method of ['extend', 'create']) {
    const oldMethod = ky[method].bind(ky)
    ky[method] = function (defaultOptions) {
      return createRequestMethods(oldMethod(defaultOptions))
    }
  }
}

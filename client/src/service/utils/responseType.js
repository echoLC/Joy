export default function returnTypeResponse (response) {
  if (!(response instanceof Response)) throw new TypeError('response is not a instance of Response')
  const contentType = response.headers.get('Content-Type')
  if (/text/.test(contentType)) {
    return response.text()
  } else if (/application\/json/.test(contentType)) {
    return response.json()
  } else if (/application\/octet-stream/.test(contentType)) {
    return response.blob()
  } else {
    throw new TypeError(`Can not handle content-type of: ${contentType}`)
  }
}

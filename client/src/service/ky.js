/* polyfills */
import 'url-search-params-polyfill'
import 'whatwg-fetch'

/* utils */
import ky from 'ky'
import enhanceKy from './utils/enhanceKy'

/**
 * 劫持 ky 的请求方法
 * 使原本的 [input, options] 的参数形式变为 [input, queryOrData, options]
 * 无需手动对 json 数据和 searchParams 的参数形式进行转换
 */
enhanceKy(ky)

export default ky


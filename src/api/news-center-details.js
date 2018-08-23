import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function initData(params) {
  const url = `/news-center-details/${params}`
  return ajax(type, url)
}

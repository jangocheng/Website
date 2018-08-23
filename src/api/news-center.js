import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getListAll(param) {
  const url = '/news-center'
  return ajax(type, url, param)
}

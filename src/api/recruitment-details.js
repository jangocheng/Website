import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getDetails(params) {
  const url = `/campus-Recruitment/${params}`
  return ajax(type, url)
}

import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getTimeList() {
  const url = '/time-list'
  return ajax(type, url)
}

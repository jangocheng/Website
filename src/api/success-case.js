import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function successCase() {
  const url = '/success-case'
  return ajax(type, url)
}

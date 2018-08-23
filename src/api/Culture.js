import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getLife() {
  const url = '/life'
  return ajax(type, url)
}

import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getCredentialList() {
  const url = '/credential-list'
  return ajax(type, url)
}

import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function companyList() {
  const url = '/company-list'
  return ajax(type, url)
}

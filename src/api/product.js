import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getProduct() {
  const url = '/product-list'
  return ajax(type, url)
}

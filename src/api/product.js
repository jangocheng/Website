import {ajax} from 'common/js/fetch'


export function getProduct() {
  const url = '/jsonElement/selectProductCategoriesBrowse.action'
  return ajax('get', url)
}

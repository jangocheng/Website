import {ajax} from 'common/js/fetch'

export function getProductDetail(val) {
  const URL = 'jsonElement/selectProductCategoriesDetial.action'
  return ajax('get',URL,{params:{id:val}})
}

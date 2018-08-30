import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function initData(params) {
  const url = `/news-center-details/${params}`
  return ajax(type, url)
}

export function getRecommend() {
  const url = `/recommend`
  return ajax(type, url)
}

export function searched(param) {
  const url = `/recommend?q=${param}`
  return ajax(type, url)
}

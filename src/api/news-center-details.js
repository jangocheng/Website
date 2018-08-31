import {ajax} from 'common/js/fetch'
import {type} from 'api/config'


export function getRecommend() {
  const url = `/news-center`
  return ajax(type, url)
}

export function searched(param) {
  const url = `/news-center?q=${param}`
  return ajax(type, url)
}

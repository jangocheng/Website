import {ajax} from 'common/js/fetch'

export function getSliderData() {
  const url = '/indexPage/selectBusinessScope_JSONList.action'
  return ajax('get', url)
}

export function getGoodProduct() {
  const url = '/goodProduct'
  return ajax('get', url)
}

export function getRecentNews() {
  const url = "/recentNews"
  return ajax('get', url)
}

export function partner() {
  const url = '/partner'
  return ajax('get', url)
}

export function getImage() {
  const url = `/photos`
  return ajax('get',url)
}



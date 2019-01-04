import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getSliderData() {
  const url = '/homeSlider'
  return ajax(type, url)
}

export function getGoodProduct() {
  const url = '/goodProduct'
  return ajax(type, url)
}

export function getRecentNews() {
  const url = "/recentNews"
  return ajax(type, url)
}

export function partner() {
  const url = '/partner'
  return ajax(type, url)
}

export function getImage() {
  const url = `/photos`
  return ajax(type,url)
}



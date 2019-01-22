import {ajax} from 'common/js/fetch'

let getImage = () => {
  const url = `/indexPageJson/selctBannerList.action`
  return ajax('get',url)
}

let getSliderData = () => {
  const url = '/indexPage/selectBusinessScope_JSONList.action'
  return ajax('get', url)
}

let getGoodProduct = () => {
  const url = '/goodProduct'
  return ajax('get', url)
}

let getRecentNews = () => {
  const url = "/recentNews"
  return ajax('get', url)
}

let partner = () => {
  const url = '/partner'
  return ajax('get', url)
}

export {getImage,getSliderData,getGoodProduct,getRecentNews,partner}



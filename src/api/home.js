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
  const url = '/jsonElement/selectProductCategoriesBrowse.action'
  return ajax('get', url)
}

let getRecentNews = () => {
  const url = "/indexPageJson/selectLastTrends.action?&pageSize=6&currentPage=1"
  return ajax('get', url)
}

let partner = () => {
  let url = '/indexPageJson/selectCooperativePartner.action?newsType=10&pageSize=36&currentPage=1'
  return ajax('get', url)
}

export {getImage,getSliderData,getGoodProduct,getRecentNews,partner}



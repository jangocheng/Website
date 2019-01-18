import {ajax} from 'common/js/fetch'

let pagings = () => {
  const url = '/newsCenter/selectNewsCenter_JSONBrowse.action'
  return ajax('get', url)
}

let getListAll = (param) => {
  const url = '/newsCenter/selectNewsCenter_JSONBrowse.action'
  return ajax('get', url, {
    params: {
      newsType: param.newsType,
      pageSize: param.pageSize,
      currentPage: param.currentPage
    }
  })
}

let getNav = () => {
  let url = `newsCenter/selectNewsTypeList_JSON.action`
  return ajax('get', url)
}

export {pagings, getListAll, getNav}

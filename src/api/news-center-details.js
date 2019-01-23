import {ajax} from 'common/js/fetch'

let postPraise = (currentId) => {
  const url ='/newsCenter/updateNewsCenter_JSONAddHeartById.action'
  return ajax('post',url,{
    id:currentId
  })
}

let getRecommend = (params) => {
  const url = `/newsCenter/selectNewsCenter_JSONBrowse.action?newsType=${params}&pageSize=8&recommended=1`
  return ajax('get', url)
}

let searched = (param) => {
  const url = `/newsCenter/selectNewsCenter_JSONBrowse.action`
  return ajax('get', url,{
    params:{
      title:param
    }
  })
}

export {postPraise,getRecommend,searched}

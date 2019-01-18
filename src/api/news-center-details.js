import {ajax} from 'common/js/fetch'

let postPraise = (currentId) => {
  const url ='/newsCenter/updateNewsCenter_JSONAddHeartById.action'
  return ajax('post',url,{
    id:currentId
  })
}

let getRecommend = () => {
  const url = `/news-center`
  return ajax(type, url)
}

let searched = (param) => {
  const url = `/news-center?q=${param}`
  return ajax(type, url)
}

export {postPraise,getRecommend,searched}

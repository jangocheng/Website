import {ajax} from 'common/js/fetch'

let getRecruitmentList = () => {
  const url = '/webWorkJson/selectWebWorkBrowseJson.action?name=selectWebWorkTJ'
  return ajax('get', url)
}

export {getRecruitmentList}

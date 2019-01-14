import {ajax} from 'common/js/fetch'

export function getTimeList() {
  const url = '/aboatJson/selectAboatBrowse.action'
  return ajax('get', url,{params:{
    name:'developmentHistory'
  }})
}

import {ajax} from 'common/js/fetch'


let getCredentialList = (size,cur) => {
  const url = '/aboatJson/selectAboatBrowse.action'
  return ajax('get', url,{
    params:{
      name:'prizeHonor',
      pageSize:size,
      currentPage:cur
    }
  })
}
export {getCredentialList}

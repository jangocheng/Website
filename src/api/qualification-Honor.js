import {ajax} from 'common/js/fetch'


let getCredentialList = () => {
  const url = '/aboatJson/selectAboatBrowse.action'
  return ajax('get', url,{
    params:{
      name:'prizeHonor'
    }
  })
}
export {getCredentialList}

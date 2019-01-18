import {ajax} from 'common/js/fetch'

let companyList = () => {
  const url = '/companyAddress/selectCompanyAddressList_JSON.action'
  return ajax('get', url)
}

export {companyList}

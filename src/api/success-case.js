import {ajax} from 'common/js/fetch'

let successCase = () => {
  const url = '/caseJson/selectCaseBrowseJson.action'
  return ajax('get', url,{
    params:{
      name:"selectCaseIndustryBrowse"
    }
  })
}

export {successCase}


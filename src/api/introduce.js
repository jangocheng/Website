import {ajax} from 'common/js/fetch'

let getIntroduce = () => {
  const URL = '/aboatJson/selectAboatBrowse.action'
  return ajax('get', URL, {
    params: {
      name: 'aboutIntroduction'
    }
  })
}


export {getIntroduce}


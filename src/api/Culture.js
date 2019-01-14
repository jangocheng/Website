import {ajax} from 'common/js/fetch'


let getCulture = () => {
  const url = '/aboatJson/selectAboatBrowse.action'
  return ajax('get', url,{
    params:{
      name:'corporateCulture'
    }
  })
}
export {getCulture}

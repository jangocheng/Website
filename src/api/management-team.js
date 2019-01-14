import {ajax} from 'common/js/fetch'

// export function getTeamRatio() {
//   const url = '/team-ratio'
//   return ajax('type', url)
// }
//
// export function getTeamDetails() {
//   const url = '/team-details'
//   return ajax('type', url)
// }

// let getTeamRatio = () => {
//   const url = '/team-ratio'
//   return ajax('type', url)
// }

let getTeamDetails = () => {
  const url = '/aboatJson/selectAboatBrowse.action'
  return ajax('get', url, {
    params: {
      name: 'aboutAdministration'
    }
  })
}

export {getTeamDetails}

import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getTeamRatio() {
  const url = '/team-ratio'
  return ajax(type, url)
}

export function getTeamDetails() {
  const url = '/team-details'
  return ajax(type, url)
}

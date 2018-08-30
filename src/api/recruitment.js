import {ajax} from 'common/js/fetch'
import {type} from 'api/config'

export function getCampusRecruitment() {
  const url = '/campus-Recruitment'
  return ajax(type, url)
}

export function getSocietyRecruitment() {
  const url = '/society-Recruitment'
  return ajax(type, url)
}

export function getBenefits() {
  const url = '/Benefits'
  return ajax(type, url)
}




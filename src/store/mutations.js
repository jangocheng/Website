import * as mutationTypes from './mutation-types'
import {setStorage} from 'common/js/storage'


const mutations = {
  [mutationTypes.SET_NEWS](state, item) {
    state.news = item
    setStorage('news',state.news)
  },

  [mutationTypes.SET_RECRUITMENT](state, item) {
    state.recruitment = item
    setStorage('recruitment',state.recruitment)
  }
}
export default mutations

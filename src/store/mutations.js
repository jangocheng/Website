import * as mutationTypes from './mutation-types'

const mutations = {
  [mutationTypes.SET_NEWS](state, item) {
    state.news = item
    localStorage.setItem('news', JSON.stringify(state.news))
  },

  [mutationTypes.SET_RECRUITMENT](state, item) {
    state.recruitment = item
    localStorage.setItem('recruitment', JSON.stringify(state.recruitment))
  }
}
export default mutations

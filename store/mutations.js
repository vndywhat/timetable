import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_COUPLES: (state, couples) => {
    state.couples = couples
  },

  SET_DAY: (state, day) => {
    state.select = day
  },

  TOGGLE_EVEN: (state) => {
    state.even = !state.even
  },
}

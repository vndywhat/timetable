export default {
  async getCouples({ commit, error }) {
    try {
      const result = await this.$fireStore
        .collection('couples')
        .orderBy('time')
        .get()
      const data = result.docs
      const results = data.map((el) => el.data())
      commit('SET_COUPLES', results)
    } catch (e) {
      error(e)
      // eslint-disable-next-line no-console
      // console.log(e)
    }
  },

  setDay({ commit }, day) {
    if (day) {
      commit('SET_DAY', day)
    }
  },

  toggleEven({ commit }) {
    commit('TOGGLE_EVEN')
  },
}

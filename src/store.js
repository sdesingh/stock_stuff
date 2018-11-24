import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_company: 'aapl',
    stock_data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
          {
              label: 'Commits',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 25, 30, 20, 25]
          }
      ]
    },
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})

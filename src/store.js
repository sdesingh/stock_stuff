import Vue from 'vue'
import Vuex from 'vuex'
import API from './model/api'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company_symbol: 'Please Enter a Company.',
    current_company_name: 'Get stock data!',
    stock_data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''],
      datasets: [
          {
              label: 'Commits',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 25, 30, 20, 25, 35]
          }
      ]
    },
    company_data: {},
    retrieved: false
  },
  getters: {

  },
  mutations: {
    change_company (state, name){
      state.company_symbol = name
    },
    new_data (state, data) {
      state.current_company_name = data[0].companyName
      state.company_symbol = data[0].symbol
      state.retrieved = true
      state.stock_data = API.parseChartData(data[1])
      
    },
    error_data (state, error) {
      state.company_symbol = 'An Error has occurred.'
      state.current_company_name = error.toString()
      state.retrieved = false
    },
  },
  actions: {
    update_data (context){

      let company = context.state.company_symbol

      axios.all([API.dataToday(company), API.chartData(company, API.CONSTANTS._TIMEFRAME.one_year)])

        // Called when both requests are completed.
        .then(axios.spread((summary, chart_data) => {

          let summary_data_parsed = summary.data.quote
          let chart_data_parsed = chart_data.data
          
          // Commit the data to the store.
          context.commit('new_data', [summary_data_parsed, chart_data_parsed])
        }))

        // An error occurs.
        .catch((error) => {
          context.commit('error_data', error)
        })
          
    }

    
  }
})

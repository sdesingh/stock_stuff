import Vue from 'vue'
import Vuex from 'vuex'
import API from './model/api'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company_symbol: '',
    current_company_name: 'Get stock data!',
    stock_data: {},
    selected_time_frame: '1Y',
    timeframes: API.CONSTANTS._TIMEFRAME
  },
  getters: {},
  mutations: {
    change_company (state, name){
      state.company_symbol = name
    },
    change_timeframe(state, index){
      state.selected_time_frame = index
      if(state.company_symbol.length > 0) this.dispatch('update_data')
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
      let timeframe = context.state.selected_time_frame

      axios.all([API.dataToday(company), API.chartData(company, timeframe)])

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

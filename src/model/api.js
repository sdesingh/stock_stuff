import axios from 'axios'
import CONSTANTS from './constants';


function dataToday(company){
  return axios.get(CONSTANTS.TODAY(company))
}

function chartData(company, timeframe){
  return axios.get(CONSTANTS.CHART_DATA(timeframe, company))
}

function parseChartData(data){

  var stock_data = {
    labels: [],
    datasets: [
      {
        label: '',
        backgroundColor: '#ffd3d3',
        borderColor: '#f87979',
        data: []
      }
    ]
  }

  stock_data.datasets[0].label = 'Price'

  data.forEach(item => {
    stock_data.labels.push(item.label)
    stock_data.datasets[0].data.push(item.close)
  });

  return stock_data

}

export default {
  chartData,
  dataToday,
  parseChartData,
  CONSTANTS
}




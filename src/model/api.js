import axios from 'axios'
import CONSTANTS from './constants';


function dataToday(company){
  return axios.get(CONSTANTS.TODAY(company))
}

function chartData(company, timeframe){
  return axios.get(CONSTANTS.CHART_DATA(timeframe, company))
}

function parseChartData(data){

  // Creating the stock_data object to be returned.
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

  // Set the key for the points on the graph.
  stock_data.datasets[0].label = 'Price'

  data.forEach(item => {
    stock_data.labels.push(item.label)
    stock_data.datasets[0].data.push(item.close)
  });

  return stock_data

}

/**
 * 
 * @param {*} data JSON Object containing the stock data for the company.
 */
function parseSummaryData(data){
  return {
    currentPrice: data.latestPrice,
    highPrice: data.high,
    lowPrice: data.low,
    change: data.change,
    changePercent: data.changePercent
  }

}

export default {
  chartData,
  dataToday,
  parseChartData,
  parseSummaryData,
  CONSTANTS
}




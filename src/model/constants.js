/* 
  -----------------------------------------------------------
                      API URL CONSTANTS
  -----------------------------------------------------------
*/
const _STOCK_BASE_URL = 'https://api.iextrading.com/1.0/' // Stock Data

const _TIMEFRAME = ['5Y','2Y','1Y','6m','1m','1d']
  

/**
 * Get the URL for retrieving data to create a chart given a timeframe.
 * @param {_TIMEFRAME} timeframe Timeframe for the chart.
 * @param {String} company_name Name of the company.
 */
function CHART_DATA(timeframe, company_name){
  return _STOCK_BASE_URL + `stock/${company_name}/chart/` + timeframe
}

/**
 * Get the URL for retrieving the summary of a company.
 * @param {String} company_name Name of the company.
 */
function SUMMARY(company_name){
  return _STOCK_BASE_URL + `stock/${company_name}/company`
}

/**
 * Get the URL for retrieving the daily data.
 * @param {String} company_name Name of the company.
 */
function TODAY(company_name){
  return _STOCK_BASE_URL + `stock/${company_name}/book`
}

export default {
  CHART_DATA,
  SUMMARY,
  TODAY,
  _TIMEFRAME

}



/* 
  -----------------------------------------------------------
                      GRAPH TYPES
  -----------------------------------------------------------
*/
const CLEAN = {
                
  responsive: true, maintainAspectRatio: true,

  legend: {
      display: false
  },

  elements: {
      point:{
          radius: 0
      }
  },
  
  scales: {
      yAxes: [{
          scaleType: "linear",
          display: true,
          ticks: {
              
          },
          gridLines: {
              display:false
          }
      }],
      xAxes: [{
          scaleType: "linear",
          display: true,
          ticks: {
              display: true
          },
          gridLines: {
              display:false
          }
      }]
  },

}

const REGULAR = {
  responsive: true, maintainAspectRatio: true,

  legend: {
      display: true
  },
  
  scales: {
      yAxes: [{
          scaleType: "linear",
          beginAtZero: true,
          display: false,
          ticks: {
              display: false
          },
          gridLines: {
              display:false
          }
      }],
      xAxes: [{
          beginAtZero: true,
          scaleType: "linear",
          display: false,
          ticks: {
              display: false
          },
          gridLines: {
              display:false
          }
      }]
  }
}

export default {
  CLEAN,
  REGULAR,

}
// chart-1
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 310,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
// chart-2

// var options = {
//   series: [44, 55, 41, 17, 15],
//   chart: {
//   type: 'donut',
// },
// responsive: [{
//   breakpoint: 480,
//   options: {
//     chart: {
//       width: 180
//     },
//     legend: {
//       position: 'bottom'
//     }
//   }
// }]
// };

// var chart = new ApexCharts(document.querySelector("#chart-2"), options);
// chart.render();

var options = {
  series: [40, 33, 13, 25],
  chart: {
  width: 300,
  type: 'donut',
},
dataLabels: {
  enabled: false
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 100
    },
    legend: {
      show: false
    }
  }
}],
legend: {
  position: 'right',
  offsetY: 0,
  height: 230,
}
};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();








// Chart-3
// var options = {
//   series: [{
//   name: 'Servings',
//   data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
// }],
//   annotations: {
//   points: [{
//     x: 'Bananas',
//     seriesIndex: 0,
//     label: {
//       borderColor: '#775DD0',
//       offsetY: 0,
//       style: {
//         color: '#fff',
//         background: '#775DD0',
//       },
//       text: 'Bananas are good',
//     }
//   }]
// },
// chart: {
//   height: 350,
//   type: 'bar',
// },
// plotOptions: {
//   bar: {
//     borderRadius: 10,
//     columnWidth: '50%',
//   }
// },
// dataLabels: {
//   enabled: false
// },
// stroke: {
//   width: 0
// },
// grid: {
//   row: {
//     colors: ['#fff', '#f2f2f2']
//   }
// },
// xaxis: {
//   labels: {
//     rotate: -45
//   },
//   categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
//     'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
//   ],
//   tickPlacement: 'on'
// },
// yaxis: {
//   title: {
//     text: 'Servings',
//   },
// },
// fill: {
//   type: 'gradient',
//   gradient: {
//     shade: 'light',
//     type: "horizontal",
//     shadeIntensity: 0.25,
//     gradientToColors: undefined,
//     inverseColors: true,
//     opacityFrom: 0.85,
//     opacityTo: 0.85,
//     stops: [50, 0, 100]
//   },
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart-3"), options);
// chart.render();

var options = {
  series: [{
  name: 'Net Profit',
  data: [54, 67, 41, 56, 61, 45, 55,73, 60, 76,48, 79]
}, ],
  chart: {
  type: 'bar',
  height: 450
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct' , 'Nav', 'Dec'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-3"), options);
chart.render();

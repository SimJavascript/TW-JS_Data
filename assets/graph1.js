// get year
let table1 = document.getElementById("table1");
let allData = [...table1.rows].map(t => [...t.children].map(u => u.innerText));
let years = allData[1].filter(function (el) { return el; });
let dataBelgium = allData[2];
let dataBulgaria = allData[3];

function getCountry() {
    let country = [];
    for (let i = 2; i < allData.length; i++) {
        country.push(allData[i][1]);
        // for (let j = 1; j < country.countrylength; j++) {
        //     console.log(country[j]);

        // }

    }
    console.log(country);

}


let belgiumCrimes = [];
for (let i = 2; i < dataBelgium.length; i++) {
    belgiumCrimes.push(parseFloat(dataBelgium[i]));
}

let crimes2 = [];
for (let i = 2; i < dataBulgaria.length; i++) {
    crimes2.push(parseFloat(dataBulgaria[i]))
    
}

let labels = years;
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: "My First dataset",
        data: belgiumCrimes,
        fill: false,
      }, {
        label: "My Second dataset",
        fill: false,
        data: crimes2,
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      },
      tooltips: {
        mode: 'label',
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    }
  });    
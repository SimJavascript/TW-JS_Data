class LineChart {
  constructor(table) {
    this.originTable = document.getElementById(table);
    this.originData = [...this.originTable.rows].map(t => [...t.children].map(u => u.innerText));
    this.type = 'line';
    this.years = [];
    this.countries = [];
    this.datasets = [];
    this.data = [];
    this.crimesByYear = [];
    this.crimesByYearInt = [];
    this.fill = false;
  }

  /**
   * Get an array with all years to display as label on X-axis
   */
  getYears() {
    this.years = this.originData[1].filter(function (el) { return el; });
  }

  /**
   * Get an array with crimes' numbers
   */
  getCrimes() {
    for (let i = 2; i < this.originData.length; i++) {
      this.crimesByYear.push(this.originData[i].slice(2));
    }

    this.crimesByYear.forEach(el => {
      for (let i = 0; i < el.length; i++) {
        el[i] = parseFloat(el[i].replace(/,/g, '.'));
      }
    })
  }
  
  /**
   * Get an array with all countries for wich we have datas to show
   */
  getCountries() {
    for (let i = 2; i < this.originData.length; i++) {
      this.countries.push(this.originData[i][1]);
    }
  }

  /**
   * Get an array with datasets' objects
   */
  getDatasets() {
    let datasets = {};
    for (let i = 0; i < this.countries.length; i++) {
      let dataset = { label: this.countries[i], data: this.crimesByYear[i]};
                datasets.push(dataset);
    }
  }

  // returnChartParameter() {
  //     {
  //         type: this.type;
  //         data: {
  //             labels: this.countries;
  //             datasets: this.datasets;{
  //                 label: country;
  //                 data: [données]
  //             }, {
  //                 label: country 2;

  //             }
  //         }
  //         options: {
  //             scales: {
  //                 yAxes: [{}]
  //             }
  //         }
  //     }

  //     return (type: this.type,
  //     data: {
  //         labels: this.labels,
  //         datasets: [{
  //             label: this.label,
  //             data: this.data,
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero: true
  //                 }
  //             }]
  //         }
  //     })  
}

finalObject = new LineChart('table1');
finalObject.getCountries();
finalObject.getCrimes(this.countries);
finalObject.getDatasets();

// finalObject.getCountries();
// finalObject.getDatasets();
// chart = new Chart(ctx, finalObject);


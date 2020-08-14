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
            this.data.push(parseInt(this.originData[i].slice(2)));
        }
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < 11; j++) {
                if (this.data[i][j]!=':') {
                    this.crimesByYear[i] = parseInt(this.data[i][j]);
                } else {
                    this.crimesByYear[i] = 0;
                }  
            }
            console.log(this.crimesByYear);
        }
        console.log(this.data);
        // console.log(this.crimesByYear);
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
        let dataset = {};
        for (let i = 0; i < this.countries.length; i++) {
            dataset.label = this.countries[i];
            dataset.data = this.data[i]; 
            this.datasets.push(dataset);
            // console.log(dataset);
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
finalObject.getCrimes();
finalObject.getDatasets();

// finalObject.getCountries();
// finalObject.getDatasets();
// chart = new Chart(ctx, finalObject);


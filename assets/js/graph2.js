class LineChart {
    constructor(table) {
        this.originTable = document.getElementById(table);
        this.originData = [...this.originTable.rows].map(t => [...t.children].map(u => u.innerText));
        this.type = 'line';
        this.labels = [];
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
        this.labels = this.originData[1].filter(function (el) { return el; });
    }

    /**
     * Get an array with crimes' numbers
     */
    getCrimes() {
        for (let i = 2; i < this.originData.length; i++) {
            this.data.push(this.originData[i].slice(2));
            for (let j = 0; j < 10; j++) {
                this.crimesByYear.push(this.data[j]);
                
            }
            console.log(this.crimesByYear);
        }
        // this.data[j].length
        // console.log(this.data);
        // for (let i = 0; i < this.data.length; i++) {
        //     for (let j = 0; j < this.data[i].length; j++) {
        //         this.crimesByYear.push(this.data[i][j]);
        //         console.log(this.crimesByYear);
                
        //     }
            
        // }
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
        }
        console.log(this.datasets);
    }


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
finalObject.getCrimes();
// finalObject.getCountries();
// finalObject.getDatasets();
// chart = new Chart(ctx, finalObject);


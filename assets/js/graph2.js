let table2 = document.getElementById('table2');
let allData2 = [...table2.rows].map(t => [...t.children].map(u => u.innerText));
// let arrayToString = JSON.stringify(Object.assign({}, allData2));  // convert array to string
// let data2Json = JSON.parse(arrayToString);  // convert string to json object
console.log(allData2);
for (let i = 0; i < allData2.length; i++) {
    const element = allData2[i][1];
    console.log(element);
}
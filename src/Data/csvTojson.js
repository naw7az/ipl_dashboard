const csvFilePath = './IPL_dataset.csv';
const csv = require('csvtojson')
fs = require('fs');

csv()
.fromFile(csvFilePath)
.then((json)=>{
  fs.writeFile('./IPL_dataset.json', JSON.stringify(json, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON array is saved.");
  });
})


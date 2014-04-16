var fs = require('fs');
var file = __dirname + '/citiesJSON.json';

console.log("reading data");
var data = JSON.parse(fs.readFileSync(file, 'utf8'));

function getCity() {
    var randNum = Math.floor(Math.random()*data.length);
    console.log(data[randNum]);
    return data[randNum];
}

getCity();

exports.getCity = getCity;
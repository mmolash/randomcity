var cityHandler = require('./cityHandler');

function start(RouteData) {
	console.log("Request handler 'start' was called....");
	RouteData.response.end();
}

function randomCity(RouteData) {
    console.log("Request handler 'getcity' was called....");
    RouteData.response.writeHead(200, {'Content-Type': 'text/json'});
    RouteData.response.write(JSON.stringify(cityHandler.getCity()));
    RouteData.response.end();
}

exports.start = start;
exports.randomCity = randomCity;
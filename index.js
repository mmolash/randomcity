var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers={};
handlers["/"]=requestHandlers.start;
handlers["/start"]=requestHandlers.start;
handlers["/randomcity"]=requestHandlers.randomCity;

server.start(router.route, handlers);
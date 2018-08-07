var http = require('http');
var parserRequest = require('./actions/parserRequest');
var configVariables = require('./config/variables');
var router = require('./actions/router');
var error = require('./errors/error');

function performs(request) {
	try {
		const {method, resource, queryString} = parserRequest.parse(request);
		console.log(`${method} to ${resource} passing ${queryString}`);

		return router.find(resource).performs(method, queryString);
	} catch (e) {
		return error.handler(e);
	}
}

var server = http.createServer(function(request, response) {
	const {status, header, body} = performs(request);
	response.writeHead(status, header);
 	response.end(body);

 	console.log('');
});

server.listen(configVariables.port, configVariables.ip);

console.log(`server is running at http://${configVariables.ip}:${configVariables.port}`);
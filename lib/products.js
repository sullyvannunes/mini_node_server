class product {
	static performs(method, params = []) {
		var end = "<h1>Paramêtros</h1><br>";
		params.forEach((param) => {
			let paramName = param.split('=')[0];
			let paramValue = param.split('=')[1];
			end = end.concat(`<li>${paramName}: ${paramValue}</li><br>`);
		});
		
		return {
			status: 200,
			header: {'Content-type': 'text/html'},
			body: end
		}
	}
}

module.exports = product;
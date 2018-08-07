class ModuleNotFound {
	static handler() {
		return {
			status: 404,
			header: {'Content-type': 'text/html'},
			body: 'Page Not Found<br>Sorry Guy!'
		};
	}
}

module.exports = ModuleNotFound;
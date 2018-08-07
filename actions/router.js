class Router {
	static find(resource) {
		return require(`../lib${resource}`);
	}
}

module.exports = Router;
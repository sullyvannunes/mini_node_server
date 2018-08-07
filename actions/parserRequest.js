class ParserRequest {
	static parse(request) {
		return {
			method: ParserRequest._method(request),
			resource: ParserRequest._resource(request),
			queryString: ParserRequest._queryString(request)
		};
	}

	static _method(request) {
		return request.method;
	}

	static _resource(request) {
		return request.url.split('?')[0];
	}

	static _queryString(request) {
		return request.url.split('?')[1].split('&');
	}
}

module.exports = ParserRequest;
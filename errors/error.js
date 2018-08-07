class Error {
	static handler(e) {
		let err = Error._findError(e);
		return err.handler();
	}

	static _findError(e) {
		return require(`./${e.code.toLowerCase()}_error`);
	}
}

module.exports = Error;
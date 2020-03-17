var axios = require('axios');


class Client {
	constructor(baseURL) {
		this.baseURL = baseURL
		this.axios = axios.create({
			baseURL: this.baseURL,
			withCredentials: true
		})
	}

	get(route, data) {
		return this.axios.get(route, data)
	}

	post(route, data) {
		return this.axios.post(route, data)
	}

	delete(route, data) {
		return this.axios.delete(route, data)
	}
}

export default Client

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
		if (data === undefined) {
			data = {environment: this.vm.environment}
		} else  {
			data.environment =  this.vm.environment
		}
		return this.axios.get(route, {params: data})
	}

	post(route, data) {
		return this.axios.post(route, data)
	}

	delete(route, data) {
		return this.axios.delete(route, data)
	}
}

export default Client

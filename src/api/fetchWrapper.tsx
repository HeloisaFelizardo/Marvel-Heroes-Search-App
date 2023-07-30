export class FetchWrapper {
	baseURL: string;
	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	async get(endpoint: any) {
		const response = await fetch(this.baseURL + endpoint, {
			method: 'get',
			headers: {
				// send a header with every GET request
				'Content-Type': 'application/json',
			},
		});
		return await response.json();
	}
}

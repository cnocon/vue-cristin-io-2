import axios from "axios"

const apiClient = axios.create({
	baseURL: "https://api.jsonbin.io/b",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"secret-key":
			"$2b$10$RDgNaGrlmzTiv0suilVmIeZ9Skhm5/rv3bd4GvW6ShS6t33dvWbaW",
	},
})

export default {
	getResume() {
		return apiClient.get("/6052c3b07ea6546cf3e19d21/latest")
	},
	getGlobals() {
		return apiClient.get("/60539405683e7e079c53e83d/latest")
	},
}

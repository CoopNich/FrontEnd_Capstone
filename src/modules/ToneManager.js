const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/tones/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/tones?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    }
}
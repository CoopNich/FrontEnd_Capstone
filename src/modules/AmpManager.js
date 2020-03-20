const remoteURL = "http://localhost:5002"

export default {

    get(id) {
        return fetch(`${remoteURL}/amps/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/amps?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    },
    post(newAmp) {
        return fetch(`${remoteURL}/amps`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAmp)
        }).then(data => data.json())
    },

}
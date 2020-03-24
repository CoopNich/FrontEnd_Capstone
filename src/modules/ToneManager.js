const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/tones/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/tones?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    },
    getWithAmp(id) {
        return fetch(`${remoteURL}/tones/${id}?_expand=amp`).then(result => result.json())
    },
    getWithGuitar(id) {
        return fetch(`${remoteURL}/tones/${id}?_expand=guitar`).then(result => result.json())
    },
    getWithPedals(id) {
        return fetch(`${remoteURL}/pedalTones?toneId=${id}&_expand=pedal`).then(result => result.json())
    }


}
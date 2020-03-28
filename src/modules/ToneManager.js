const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/tones/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/tones?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    },
    getByName(name) {
      return fetch(`${remoteURL}/tones?userId=${parseInt(sessionStorage.getItem("credentials"))}&name=${name}`).then(result => result.json())
  },
    getWithGuitarAndAmp(id) {
        return fetch(`${remoteURL}/tones/${id}?_expand=amp&_expand=guitar`).then(result => result.json())
    },
    // getWithGuitar(id) {
    //     return fetch(`${remoteURL}/tones/${id}?_expand=guitar`).then(result => result.json())
    // },
    getWithPedals(id) {
        return fetch(`${remoteURL}/pedalTones?toneId=${id}&_expand=pedal`).then(result => result.json())
    },
    post(newTone) {
        return fetch(`${remoteURL}/tones`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTone)
        }).then(data => data.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/tones/${id}`, {
          method: "DELETE"
        }).then(result => result.json())
      },
      update(editedTone) {
        return fetch(`${remoteURL}/tones/${editedTone.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedTone)
        }).then(data => data.json());
      }

}
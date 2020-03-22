const remoteURL = "http://localhost:5002"

export default {

    get(id) {
        return fetch(`${remoteURL}/guitars/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/guitars?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    },
    post(newguitar) {
        return fetch(`${remoteURL}/guitars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newguitar)
        }).then(data => data.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/guitars/${id}`, {
          method: "DELETE"
        }).then(result => result.json())
      },
      update(editedguitar) {
        return fetch(`${remoteURL}/guitars/${editedguitar.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedguitar)
        }).then(data => data.json());
      }

}
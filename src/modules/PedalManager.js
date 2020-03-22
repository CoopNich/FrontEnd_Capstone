const remoteURL = "http://localhost:5002"

export default {

    get(id) {
        return fetch(`${remoteURL}/pedals/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/pedals?userId=${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json())
    },
    post(newpedal) {
        return fetch(`${remoteURL}/pedals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newpedal)
        }).then(data => data.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/pedals/${id}`, {
          method: "DELETE"
        }).then(result => result.json())
      },
      update(editedpedal) {
        return fetch(`${remoteURL}/pedals/${editedpedal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedpedal)
        }).then(data => data.json());
      }

}
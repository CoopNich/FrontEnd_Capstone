const remoteURL = "http://localhost:5002";

export default {
    getUser(email) {
        return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json());
    },
    getCurrentUser() {
        return fetch(`${remoteURL}/users/${parseInt(sessionStorage.getItem("credentials"))}`).then(result => result.json());
    },
    getAllUsers() {
        return fetch(`${remoteURL}/users`).then(result => result.json());
      },
    postUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json());
    },
}
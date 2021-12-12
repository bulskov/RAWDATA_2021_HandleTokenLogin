define([], () => {
    const usersUrl = "api/users";

    let register = (user, callback) => {
        let params = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(usersUrl + '/register', params)
            .then(response => response.json())
            .then(json => callback(json));
    }

    let login = (user, callback) => {
        let params = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(usersUrl + '/login', params)
            .then(response => response.json())
            .then(json => callback(json));
    }

    let getMovies = () => {
        let params = {
            method: "GET",
            headers: {
                "Authorization": "Barer " + localStorage.getItem("token")
            }
        };
        return fetch("api/movies", params)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            });
    }

    return {
        register,
        login,
        getMovies
    }
});
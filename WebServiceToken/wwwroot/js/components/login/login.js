define(['knockout', 'dataService'], (ko, ds) => {
    return function (params) {
        let username = ko.observable();
        let password = ko.observable();

        let login = () => {
            let user = {
                username: username(),
                password: password()
            };

            localStorage.removeItem("username");
            localStorage.removeItem("token");

            ds.login(user, data => {
                console.log(data);
                localStorage.setItem("username", data.username);
                localStorage.setItem("token", data.token);
                localStorage.setItem("id", JSON.parse(atob(data.token.split('.')[1])).id);
             });

        };

        let cancel = () => {
            // TODO
        }

        

        return {
            username,
            password,
            login,
            cancel
        };
    };
});


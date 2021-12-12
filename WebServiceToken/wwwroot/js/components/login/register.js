define(['knockout', 'dataService', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let name = ko.observable();
        let username = ko.observable();
        let password = ko.observable();

        let register = () => {
            let user = {
                name: name(),
                username: username(),
                password: password()
            };

            ds.register(user, data => {
                console.log(data);
                postman.publish("changeView", "login");
            });

        };

        let cancel = () => {
            // TODO
        }



        return {
            username,
            password,
            name,
            register,
            cancel
        };
    };
});
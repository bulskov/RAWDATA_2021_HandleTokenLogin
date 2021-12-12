define(["knockout", 'postman'], function (ko, postman) {
    let currentView = ko.observable("register");

    postman.subscribe("changeView", view => currentView(view));

    let gotoMovies = () => currentView("movies");
    let gotoLogin = () => currentView("login");
    let gotoRegister = () => currentView("register");

    return {
        currentView,
        gotoMovies,
        gotoLogin,
        gotoRegister
    }
});
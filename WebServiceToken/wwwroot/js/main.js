
require.config({
    baseUrl: 'js',
    paths: {
        text: "lib/requirejs/text",
        jquery: "lib/jquery/dist/jquery.min",
        knockout: "lib/knockout/build/output/knockout-latest.debug",
        dataService: "services/dataService",
        postman: "services/postman",
    }
});

require(['knockout', 'config'], (ko, config) => {
    ko.components.register('login', { 
        viewModel: { require: 'components/login/login' },
        template: { require: 'text!components/login/login.html' }
    });

    ko.components.register('register', {
        viewModel: { require: 'components/login/register' },
        template: { require: 'text!components/login/register.html' }
    });

    ko.components.register('movies', {
        viewModel: { require: 'components/movies/movies' },
        template: { require: 'text!components/movies/movies.html' }
    });
});

require(["knockout", "viewmodel"], function (ko, vm) {
    ko.applyBindings(vm);

});
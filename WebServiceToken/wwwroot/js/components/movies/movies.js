define(['knockout', 'dataService', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let movies = ko.observableArray([]);

        ds.getMovies()
            .then(data => movies(data))
            .catch(error => console.log(error));

        return {
            movies
        };
    };
});
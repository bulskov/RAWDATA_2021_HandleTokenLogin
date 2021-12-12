define([], () => {
    let events = {
        changeView: "changeView",
        addCategory: "addCategory",
    };

    let views = {
        addCategory: "add-category",
        showCategories: "show-categories" 
    }

    return {
        events,
        views
    }
});
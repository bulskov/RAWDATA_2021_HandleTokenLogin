define([], () => {
    let subscribers = [];
    //let lastEvent = undefined;

    let subscribe = (event, callback) => {
        let subscriber = { event, callback };
        subscribers.push(subscriber);

        // unsubscribe function :-)
        return () => {
            subscribers = subscribers.filter(e => e !== subscriber);
        }

        //if (lastEvent !== undefined && lastEvent.event === event) {
        //    callback(lastEvent.data);
        //}
    }

    let publish = (event, data) => {
        subscribers.forEach(s => {
            if (s.event === event) s.callback(data);
        });
        //lastEvent = { event, data };
    };

    return {
        subscribe,
        publish
    }

});
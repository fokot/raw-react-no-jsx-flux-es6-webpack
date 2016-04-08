


function navigated() {
    // Strip leading and trailing '/'
    normalizedHash = window.location.hash.replace(/^#\/?|\/$/g, '');

    if (normalizedHash === '') {
        // Redirect for default route
        startNavigating('/contacts');
    }
    else {
        // Otherwise update our application state
        setState({location: normalizedHash.split('/'), transitioning: false});
    }
}

function startNavigating(newURI) {

    var currentURI = window.location.hash.substr(1);

    if (currentURI != newURI) {
        setState({transitioning: true});

        window.location.replace(
            window.location.pathname + window.location.search + '#' + newURI
        );
    }
}


/*
 * Model
 */


// Set the initial app state
var state = {
    contacts: [
        {key: '1', name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
        {key: '2', name: "Jim", email: "jim@example.com"},
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE),
    location: window.location.hash
};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
    Object.assign(state, changes);

    if (!state.transitioning) {
        ReactDOM.render(
            React.createElement(Application, state),
            document.getElementById('react-app')
        );
    }
}

// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);

// Start the app
navigated();
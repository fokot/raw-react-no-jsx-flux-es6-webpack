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

// Start the app
navigated();
var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null};

function updateNewContact(contact) {
    setState({ newContact: contact });
}

function submitNewContact() {
    var contact = Object.assign({}, state.newContact, {key: (state.contacts.length + 1) + '', errors: {}});

    if (!contact.name) {
        contact.errors.name = ["Please enter your new contact's name"];
    }
    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = ["Please enter your new contact's email"];
    }

    setState(
        Object.keys(contact.errors).length === 0
            ? {
            newContact: Object.assign({}, CONTACT_TEMPLATE),
            contacts: state.contacts.slice(0).concat(contact),
        }
            : { newContact: contact }
    );
}


function updateContactForm(contact) {
    setState({ contactForm: contact });
}


function submitContactForm() {
    var key = state.location[1];
    var contact = Object.assign({}, state.contactForm, {errors: []});

    if (!contact.name) {
        contact.errors.name = ["Please enter your new contact's name"];
    }
    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = ["Please enter your new contact's email"];
    }

    if( Object.keys(contact.errors).length === 0 ) {
        startNavigating('/contacts');

        setState({
            contactForm: null,
            contacts: state.contacts.map( function (c) {
                if(c.key == key) {
                    return contact;
                }
                return c;
            })
        });

    } else {
        setState({contactForm: contact});
    }
}

function cancelEditingContact() {
    setState({ newContact: Object.assign({}, CONTACT_TEMPLATE), contactForm: null });
    startNavigating('/contacts');
}

var Application = React.createClass({
    propTypes: {
        location: React.PropTypes.array.isRequired,
    },

    render: function () {
        switch (state.location[0]) {
            case 'contacts':
                if (state.location[1]) {
                    return React.createElement(ContactView, Object.assign({}, state, {
                        id: state.location[1],
                        onChangeContact: updateContactForm,
                        onSubmitContact: submitContactForm,
                        onCancel: cancelEditingContact,
                    }));
                }
                else {
                    return React.createElement(ContactsView, Object.assign({}, state, {
                        onChangeContact: updateNewContact,
                        onSubmitContact: submitNewContact,
                        onCancel: cancelEditingContact,
                    }));
                }
                break;
            default:
                return React.createElement(NotFoundView, {});
        }

    }
});
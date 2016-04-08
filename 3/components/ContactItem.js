var ContactItem = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
    },

    render: function() {
        return (
            React.createElement('li', {className: 'ContactItem'},
                React.createElement('a', {href: "#/contacts/"+this.props.id, className: 'ContactItem-name'}, this.props.name),
                React.createElement('a', {className: 'ContactItem-email', href: 'mailto:'+this.props.email}, this.props.email),
                React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
            )
        );
    },
});
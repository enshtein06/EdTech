import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class AccountButton extends Component {
	render () {
		const {firstname, secondname} = this.props.user;
		const initials = firstname[0] + secondname[0];
		return (<Link className="navbar__list--account" to={this.props.to}>{initials}</Link>)
	}
}

export default AccountButton;
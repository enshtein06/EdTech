import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import NavbarNotification from '../components/header/NavbarNotification';
import AccountButton from '../components/header/AccountButton';

class Header extends Component {
	state = {
		wishlist: 11,
		cart: 3,
		messages: 0,
		user: {
			firstname: "Askhat",
			secondname: "Assiljbekov"
		},
		searchBar: ''
	}

	searchBarChange = (e) => {
		this.setState({searchBar: e.target.value})
	}

	render () {
		const {wishlist, cart, messages} = this.state;
		return (
				<header>
					<div className="headerContainer">
						<div className="logo">
							<Link to="/"><span>Ed</span>Tech</Link>
						</div>
						<form className="search__form">
							<input onChange={this.searchBarChange} value={this.state.searchBar} name="searchBar" type="input" className="searchBar" placeholder="Search for courses" />
							<button className="searchButton" type="submit">
								<i className="fa-search fa"></i>
							</button>
						</form>
						<div className="navbar">
							<ul className="navbar__list">
								<li className="navbar__list-el">
									<Link to="/courses">Courses</Link>
								</li>
								<li className="navbar__list-el">
									<Link to="/teachers">Teachers</Link>
								</li>
								<li className="navbar__list-el">
									<Link to="/wishlist">
										<i className="fa fa-heart"></i>
										<NavbarNotification numberOfNotification={wishlist} />
									</Link>
								</li>
								<li className="navbar__list-el">
									<Link to="/cart">
										<i className="fa fa-shopping-cart"></i>
										<NavbarNotification numberOfNotification={cart} />
									</Link>
								</li>
								<li className="navbar__list-el">
									<Link to="/chat">
										<i className="fa fa-comments"></i>
										<NavbarNotification numberOfNotification={messages} />
									</Link>
								</li>
								<li className="navbar__list-el">
									<AccountButton to="/user" user={this.state.user} />
								</li>
							</ul>
						</div>
					</div>
				</header>
		)
	}
};

export default Header;
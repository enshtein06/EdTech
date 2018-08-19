import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import NavbarNotification from '../components/header/NavbarNotification';
import AccountButton from '../components/header/AccountButton';

import Signin from './../containers/Signin';
import Signup from './../containers/Signup';

class Header extends Component {
	state = {
		wishlist: 11,
		cart: 3,
		messages: 0,
		user: {
			firstname: "Askhat",
			secondname: "Assiljbekov"
		},
		searchBar: '',
		token: "",
		signinToggle: false,
		signupToggle: false
	}

	searchBarChange = (e) => {
		this.setState({searchBar: e.target.value})
	}

	onAuthToggle = (isLogin) => {
		if(isLogin) {
			this.setState({signinToggle: !this.state.signinToggle});
		} else {
			this.setState({signupToggle: !this.state.signupToggle});
		}
	}

	render () {
		const {wishlist, cart, messages} = this.state;
		const {token} = this.props;
		console.log('HEADER RENDER')

		let authRenderModel = (
						<div className="navbar">
							<ul className="navbar__list">
								<li className="navbar__list-el">
									<Link to="/courses">My Courses</Link>
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
		);
		if(!token) {
			authRenderModel = (
				<div className="">
					<ul className="navbar__list">
						<li className="navbar__list-el button">
							<button className="button__signin" onClick={() => this.onAuthToggle(true)}>Login</button>
						</li>
						<li className="navbar__list-el button">
							<button className="button__signup" onClick={() => this.onAuthToggle(false)}>Sign up</button>
						</li>
					</ul>
				</div>
			)
		}
		let renderAuth = null;
		if(this.state.signinToggle && !token) {
			renderAuth = <Signin onAuthToggle={() => this.onAuthToggle(true)} />
		} 
		if(this.state.signupToggle && !token) {
			renderAuth = <Signup onAuthToggle={() => this.onAuthToggle(false)} />
		}
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
						{authRenderModel}
					</div>
					{renderAuth}
				</header>
		)
	}
};

const mapStateToProps = (state) => {
	console.log(state)
	return {
		token: state.get('auth').get('token')
	}
}

export default connect(mapStateToProps)(Header);
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';
import { FaCoffee } from 'react-icons/fa';
import { Component } from 'react';

export default class Navbar extends Component {
	state = {
		isOpen: false,
		collapse: 'collapse navbar-collapse'
	};
	toggleHandler = () => {};
	render() {
		return (
			<nav className="navbar navbar-expand-md bg-light navbar-light">
				<Link to="/" className="navbar-brand">
					café Delice
				</Link>
				<FaCoffee className="fa-lg ml-auto mr-2" />
				<button className="navbar-toggler" type="button" onClick={this.toggleHandler}>
					<FaBars className="fa-lg" />
				</button>
				<div className={this.state.collapse}>
					<ul className="navbar-nav mx-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								HOME
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/aboutus" className="nav-link">
								ABOUT US
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-link">
								OUR SERVICES
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

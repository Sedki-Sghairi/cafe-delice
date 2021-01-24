import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<a className="navbar-brand" href="#0">
				<FaCoffee className="fa-lg mx-2" />café Delice
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<FaBars className="fa-lg" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<div className="mr-auto" />
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link">HOME</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./aboutus.html">
							ABOUT US
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./service.html">
							OUR SERVICES
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

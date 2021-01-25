import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';
import { FaCoffee } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggleHandler = () => {
		setIsOpen(!isOpen);
	};
	const show = isOpen ? 'show' : '';
	return (
		<nav className="navbar navbar-expand-md bg-light navbar-light">
			<Link to="/" className="navbar-brand">
				café Delice
			</Link>
			<FaCoffee className="fa-lg ml-auto mr-2" />
			<button className="navbar-toggler" type="button" onClick={toggleHandler}>
				<FaBars className="fa-lg" />
			</button>
			<div className={`${show} collapse navbar-collapse`}>
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
};
export default Navbar;

import React from 'react';
import BackgroundImage from 'gatsby-background-image';
const background = ({ image, title, styleClass, children }) => {
	return (
		<BackgroundImage className={styleClass} fluid={image}>
			<h1 className="title text-white 
			text-uppercase text-center display-4 font-weight-bold">{title}</h1>
			{children}
		</BackgroundImage>
	);
};
background.defaultProps = {
	title: 'Cafe Delice',
	styleClass: 'default-background'
};
export default background;

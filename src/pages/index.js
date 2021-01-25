import React from 'react';
import Layout from '../components/layout';
import BackgroundSlider from 'gatsby-image-background-slider';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
	</Layout>
);

export default IndexPage;
/*
query={useStaticQuery(graphql`
query {
	backgrounds: allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
		nodes {
			relativePath
			childImageSharp {
				fluid(maxWidth: 4000, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
}
`)}
*/

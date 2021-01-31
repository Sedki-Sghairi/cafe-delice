import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import Background from '../components/background';
const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<Background image={data.file.childImageSharp.fluid} title="Bazdig Coffee" styleClass="default-background" />
	</Layout>
);
export const query = graphql`
	{
		file(relativePath: { eq: "bg.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;
export default IndexPage;

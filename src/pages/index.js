import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
	</Layout>
);

export default IndexPage;

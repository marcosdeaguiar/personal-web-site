import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Education from "../components/Education";
import Position from "../components/Position";

const IndexPage = () => (
  <Layout>
    <SEO title="Marcos de Aguiar bio" />
    <Position />
    <Education />
  </Layout>
)

export default IndexPage

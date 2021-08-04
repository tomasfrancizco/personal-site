import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout"
import { navigate } from "gatsby";
import ThankYou from "../components/thankyou"

const ThankYouPage = () => {

  return(
    <Layout>
      <SEO title="Tomás Freire Knight - Web Developer" />
      <ThankYou />
    </Layout>
  ) 
}

export default ThankYouPage;
import React from "react"

import SEO from "../components/seo"

import Layout from "../components/layout"
import About from "../components/about"
import Work from "../components/work"
import Education from "../components/education"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Photography from "../components/photography"
import Contact from "../components/contact"
import Footer from "../components/common/footer"

export default function IndexPage() {
  
  return (
    <Layout>
      <SEO title="Homeee" />
      <About />
      <div className="section work-education-container half-height">
        <Work />
        <Education />
      </div>
      <Skills />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </Layout>
  )
}

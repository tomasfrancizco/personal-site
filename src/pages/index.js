import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import About from "../components/about"
import Work from "../components/work"
import Education from "../components/education"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Languages from "../components/languages"
import Achievements from "../components/achievements"
import Certifications from "../components/certifications"
import Photography from "../components/photography"
import Resume from "../components/resume"
import Contact from "../components/contact"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Homeee" />
      <About />
      <Work />
      {/* <Skills />
      <Projects /> */}
      {/* <Education /> // Actualizacion
      <Photography /> // Actualizacion
      <Languages /> // Actualizacion
      <Achievements /> // Actualizacion
      <Certifications /> // Actualizacion
      // */}
      {/* <Resume />
      <Contact /> */}
    </Layout>
  )
}

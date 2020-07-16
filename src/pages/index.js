import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import About from "../components/about"
import Work from "../components/work"
import Education from "../components/education"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Achievements from "../components/achievements"
import Photography from "../components/photography"
import Contact from "../components/contact"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Homeee" />
      <About />
      {/* <Work />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
       */}
      <Photography />
      <Contact />
    </Layout>
  )
}

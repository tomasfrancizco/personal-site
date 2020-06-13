import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

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

export default function IndexPage({data}) {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Work />
      <Education />
      <Skills />
      <Photography instagram={data}/>
      {/* <Projects />
      <Languages />
      <Achievements />
      <Certifications />
      <Resume />
      <Contact /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

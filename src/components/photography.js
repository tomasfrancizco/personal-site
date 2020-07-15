import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const original = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          relativePath: { regex: "/^((?!small).)*$/" }
          relativeDirectory: { eq: "Instagram" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
      }
    }
  `)
  return (
    <div className="section" id="photography">
      <h3 className="section-title">PHOTOGRAPHY</h3>
      <h5>Chequeá algunas de las fotos que saco</h5>
      <div id="instagram-feed-container">
        {original.allFile.edges.map(({ node }) => (
          <a href={node.publicURL} target="_blank">
            <Img
              fluid={node.childImageSharp.fluid}
              className="instagram-preview"
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  )
}

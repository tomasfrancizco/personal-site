import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const small = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { relativeDirectory: { eq: "Instagram/Small" }, extension: {} }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
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
        {small.allFile.edges.map(({ node }) => (
          <a href="https://www.instagram.com/tomasfrancizco" target="_blank">
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

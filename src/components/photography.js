import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
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
      <h3>PHOTOGRAPHY</h3>
      <h5 className="section-title">Check out my last Instagram posts!</h5>
      <div id="instagram-feed-container">
        {data.allFile.edges.map(({ node }) => (
          <a href={`https://www.instagram.com/p/${node.id}`} target="_blank">
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

import React from "react"
import { graphql } from "gatsby"

export default function Photography({ data }) {
  
  console.log("data: ", data)

  return (
    <div className="section" id="photography">
      <h3 className="section-title">Photography</h3>
    </div>
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
          # Only available with the public api scraper
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

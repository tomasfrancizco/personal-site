import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Photography() {
  const data = useStaticQuery(graphql`
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
          }
        }
      }
    }
  `)

  return (
    <div className="section" id="photography">
      <h3 className="section-title">Photography</h3>
      {data.allInstaNode.edges.map(({ node }, i) => {
        return (
          <a key={i} href={node.original} target="_blank">
            <Img fixed={node.localFile.childImageSharp.fixed} alt="" />
          </a>
        )
      })}
    </div>
  )
}

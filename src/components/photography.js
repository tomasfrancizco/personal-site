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
      <h3 className="section-title">PHOTOGRAPHY</h3>
      <div id="instagram-feed-container">
        {data.allInstaNode.edges.map(({ node }, i) => (
          <a
            key={i}
            href={`https://www.instagram.com/p/${node.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={node.localFile.childImageSharp.fixed} alt="" />
          </a>
        ))}
      </div>
    </div>
  )
}

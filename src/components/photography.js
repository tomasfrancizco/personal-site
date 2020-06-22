import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import linkChain from "../images/linkChain.png"

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
          <motion.a
            // whileHover={{scale: 1.1, rotate: 360}}
            // style={{originX: 0.5}}
            // animate={{ x: -200, y: 200}}
            // transition={{ease: "easeInOut", duration: 2}}
            key={i}
            href={`https://www.instagram.com/p/${node.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img className="instagram-preview" fixed={node.localFile.childImageSharp.fixed} alt="" />
            <img id="link-chain" src={linkChain} alt=""/>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import location from "../../public/icons/pin.svg"

export default () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      __typename
      allInstaNode(limit: 10, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
            caption
          }
        }
      }
    }
  `)
  return (
    <div className="section" id="photography" uk-scrollspy="cls: uk-animation-fade; delay: 300">
      <h3 className="section-title">PHOTOGRAPHY</h3>
      <Carousel>
        {query.allInstaNode.edges.map(({ node }, i) => {
          return (
            <Carousel.Item key={i}>
              <a
                href={`https://www.instagram.com/p/${node.id}`}
                target="_blank"
              >
                <Img
                  fluid={node.localFile.childImageSharp.fluid}
                  className="instagram-picture"
                  alt="Instagram picture"
                />
              </a>
              <Carousel.Caption>
                <p>{node.caption !== null ? node.caption.slice(0, 20) + "..." : null}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

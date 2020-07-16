import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import location from "../../public/icons/pin.svg"

export default () => {
  const original = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          relativePath: { regex: "/^((?!original).)*$/" }
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
            name
          }
        }
      }
    }
  `)
  return (
    <div className="section" id="photography">
      <h3 className="section-title">PHOTOGRAPHY</h3>
      <Carousel>
        {original.allFile.edges.map(({ node }) => (
          <Carousel.Item>
            <Img
              fluid={node.childImageSharp.fluid}
              className="instagram-picture"
              alt="Instagram picture"
            />
            <Carousel.Caption>
              <p><img src={location} alt="location" style={{height: "1em"}}/> {node.name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

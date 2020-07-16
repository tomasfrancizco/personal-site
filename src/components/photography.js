import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"

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
      <Carousel>
        {original.allFile.edges.map(({ node }) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={node.publicURL}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

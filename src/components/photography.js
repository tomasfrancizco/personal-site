import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import location from "../../public/icons/pin.svg"

export default () => {
  const query = useStaticQuery(graphql`
  query MyQuery {
    __typename
    allInstaNode(limit: 10, sort: {fields: localFile___birthTime}) {
      edges {
        node {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
      }
    }
  }
  `)
  return (
    <div className="section" id="photography">
      <h3 className="section-title">PHOTOGRAPHY</h3>
      <Carousel>
        {query.allInstaNode.edges.map(({ node }) => (
          <Carousel.Item>
            <Img
              fluid={node.localFile.childImageSharp.fluid}
              className="instagram-picture"
              alt="Instagram picture"
            />
            <Carousel.Caption>
              <p><img src={location} alt="location" style={{height: "1em"}}/>Insta</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

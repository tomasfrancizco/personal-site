import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import photo from "../images/Instagram/New York.jpg"

export default () => {
  const query = useStaticQuery(graphql`
    query MyQuery2 {
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
    <div
      className="section"
      id="photography"
      uk-scrollspy="cls: uk-animation-fade; delay: 300"
    >
      <h3 className="section-title">PHOTOGRAPHY</h3>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        uk-slideshow="true"
      >
        <ul className="uk-slideshow-items">
          {query.allInstaNode.edges.map(({ node }, i) => {
            return (
              <Img
                key={i}
                fluid={node.localFile.childImageSharp.fluid}
                className="instagram-picture"
                alt="Instagram picture"
                uk-cover="true"
              />
            )
          })}
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slideshow-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
        ></a>
      </div>
      {/* <Carousel>
        {query.allInstaNode.edges.map(({ node }, i) => {
          return (
            <Carousel.Item key={i}>
              <a
                href={`https://www.instagram.com/p/${node.id}`}
                target="_blank"
                rel="noopener noreferrer"
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
      </Carousel> */}
    </div>
  )
}

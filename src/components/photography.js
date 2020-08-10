import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      __typename
      allInstaNode(limit: 10, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            localFile {
              childImageSharp {
                original {
                  src
                }
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
      className="section full-height"
      id="photography"
      uk-scrollspy="cls: uk-animation-fade; delay: 300; offset-top: -200"
    >
      <h3 className="section-title">INSTAGRAM</h3>
      <div
        uk-slider="true; autoplay: true; center: true"
      >
        <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
          {query.allInstaNode.edges.map(({ node }, i) => {
            return (
              <a
                href={"https://www.instagram.com/p/" + node.id}
                target="_blank"
                key={i}
                rel="noopener noreferrer"
              >
                <Img
                  fluid={node.localFile.childImageSharp.fluid}
                  alt="instagram"
                />
              </a>
            )
          })}
        </ul>
        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    </div>
  )
}
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const query = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {relativeDirectory: {eq: "instagram"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
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
      <h3 className="section-title">FOTOGRAFÍA</h3>
      <div uk-slider="true; autoplay: true; center: true">
        <div className="uk-position-relative">
          <div className="uk-slider-container uk-light">
            <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
              {query.allFile.edges.map(({ node }, i) => {
                return (
                  <a
                    href={"https://www.instagram.com/p/" + node.id}
                    target="_blank"
                    key={i}
                    rel="noopener noreferrer"
                  >
                    <Img
                      fluid={node.childImageSharp.fluid}
                      alt="instagram"
                    />
                  </a>
                )
              })}
            </ul>
          </div>
          <div className="uk-hidden@s uk-light">
            <a
              className="uk-position-center-left uk-position-small"
              href="#"
              uk-slidenav-previous="true"
              uk-slider-item="previous"
            ></a>
            <a
              className="uk-position-center-right uk-position-small"
              href="#"
              uk-slidenav-next="true"
              uk-slider-item="next"
            ></a>
          </div>

          <div className="uk-visible@s">
            <a
              className="uk-position-center-left-out uk-position-small"
              href="#"
              uk-slidenav-previous="true"
              uk-slider-item="previous"
            ></a>
            <a
              className="uk-position-center-right-out uk-position-small"
              href="#"
              uk-slidenav-next="true"
              uk-slider-item="next"
            ></a>
          </div>
        </div>

        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    </div>
  )
}

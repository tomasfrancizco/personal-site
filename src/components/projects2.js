import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  return (
    <div
      className="section full-height"
      id="photography"
      uk-scrollspy="cls: uk-animation-fade; delay: 300; offset-top: -200"
    >
      <h3 className="section-title">INSTAGRAM</h3>
      <div
        uk-slider="true; autoplay: true; center: true"
        style={{ borderRadius: "25px" }}
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
                <img
                  src={node.localFile.childImageSharp.fluid.src}
                  alt="Instagram Picture"
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
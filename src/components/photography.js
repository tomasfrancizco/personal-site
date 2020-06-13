import React from "react"
import { graphql } from "gatsby"

export default function Photography({ instagram }) {

  return (
    <div className="section" id="photography">
      <h3 className="section-title">Photography</h3>
      {instagram.allInstaNode.edges.map((pic, i) => (
        <img key={i} src={pic.original} alt="instapic"/>
      ))}
    </div>
  )
}

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./common/sidebar"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../uikit-3.5.5/css/uikit.min.css';
import "./layout.css"

if (typeof window !== "undefined") {
  const UIkit = require("uikit/dist/js/uikit.min")
  const icons = require("uikit/dist/js/uikit-icons.min")
  UIkit.use(icons)
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="layout">
      <Sidebar siteTitle={data.site.siteMetadata.title} />
      <div id="main">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

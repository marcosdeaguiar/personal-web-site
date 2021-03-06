/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import TopMenu from "./TopMenu"
import "bootstrap/dist/css/bootstrap.min.css"
import ProfileRow from "./ProfileRow"

const Layout = ({ children }) => {
  
  return (
    <>
      <TopMenu />
      <ProfileRow />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
    <footer style={{"margin-top": 40}}>
          <p>
            &copy; 2019 Marcos de Aguiar
          </p>
    </footer>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

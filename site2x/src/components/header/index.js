import PropTypes from "prop-types"
import React from "react"

import './index.scss'

const Header = ({ siteTitle }) => (
  <header className='app-header'>
    <h2>
      {siteTitle}
    </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
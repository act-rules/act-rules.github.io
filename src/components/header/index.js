import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const Header = ({ siteTitle }) => (
	<Link to="/pages/about" className="app-header">
		<h2>{siteTitle}</h2>
	</Link>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header

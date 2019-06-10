import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const Header = ({ siteTitle }) => (
	<header className="app-header">
		<Link to="/pages/about">
			<h1>{siteTitle}</h1>
		</Link>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header

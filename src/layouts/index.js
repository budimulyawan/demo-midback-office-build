import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const ListLink = props =>
<li style={{ display: `inline-block`,marginRight: `1rem` }}>
  <Link style={{ color: `white` , fontSize: `1.5rem`}} to={props.to}>
    {props.children}
  </Link>
</li>

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
        <img style={{ margin: 0 }} src='https://www.intrepidgroup.travel/sites/intrepidgroup.travel/themes/bootstrap_intrepidgroup/images/logo_0.png' />
        
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
       
          
        <ListLink to="/">Profile</ListLink>
        <ListLink to="/download/">Download</ListLink>
      </ul>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Intrepid Group Travel Payment Plus"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

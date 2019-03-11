import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class NavLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
  }

  render() {
    const { to, children, ...rest } = this.props;

    return (
      <Link
        style={{
          fontSize: 18,
          textDecoration: 'none',
        }}
        to={to}
        {...rest}
      >
        {children}
      </Link>
    )
  }
}

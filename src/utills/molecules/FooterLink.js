import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default class FooterLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
  }

  render() {
    const { to, ...rest } = this.props;
    return (
      <div>
        <Link
          style={{
            textAlign: "left",
            fontSize: 16,
            lineHeight: 1.5,
            color: 'blue',
          }}
          to={to}
          {...rest} />
      </div>
    )
  }
}

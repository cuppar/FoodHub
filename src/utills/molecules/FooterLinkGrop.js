import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FooterLink from './FooterLink';

export default class FooterLinkGrop extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
  }

  render() {
    return (
      <span style={{ display: 'inline-block' }}>
        {this.props.links.map(link => (
          <FooterLink
            key={link.title}
            to={link.path}>
            {link.title}
          </FooterLink>
        ))}
      </span>
    )
  }
}

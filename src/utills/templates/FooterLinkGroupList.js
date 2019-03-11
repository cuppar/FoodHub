import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FooterLinkGrop from '../molecules/FooterLinkGrop';

export default class FooterLinkGroupList extends Component {
  static propTypes = {
    linkss: PropTypes.arrayOf(PropTypes.array).isRequired,
  }

  render() {
    return (
      <div style={{ padding: 0 }}>
        {this.props.linkss.map((links, index) => (
          <span
            key={index}
            style={{
              padding: 20
            }}>
            <FooterLinkGrop links={links} />
          </span>
        ))}
      </div>
    )
  }
}

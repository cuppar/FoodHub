import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CardImg extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  }

  render() {
    const { src } = this.props;
    return (
      <div>
        <img
          style={{
            width: '100%',
          }}
          src={src}
          alt={src} />
      </div>
    )
  }
}

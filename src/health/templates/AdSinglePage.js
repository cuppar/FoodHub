import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default class AdSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props

    return (
      <div>
        {items.map((ad, index) => (
          <div
            style={{ padding: 10 }}
            key={index}
          >
            <Link to={ad.path}>
              <img
                style={{ width: '100%' }}
                src={ad.src}
                alt="ad" />
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

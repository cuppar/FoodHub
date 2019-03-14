import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CookBookCard from '../organisms/CookBookCard';

export default class CookBookSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props

    return (
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ padding: 10 }}
          >
            <CookBookCard cookBookStep={item} />
          </div>
        ))}
      </div>
    )
  }
}

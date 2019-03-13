import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RestaurantCard from '../organisms/RestaurantCard';

export default class RestaurantSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props

    return (
      <div>
        {items.map(item => (
          <div
            key={item.id}
            style={{
              padding: 10
            }}>
            <RestaurantCard
              restaurant={item}
            />
          </div>
        ))}
      </div>
    )
  }
}

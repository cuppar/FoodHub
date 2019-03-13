import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RestaurantFoodCardList from './RestaurantFoodCardList';

export default class RestaurantFoodSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props
    const mid = Math.ceil(items.length / 2)
    const firstRow = items.slice(0, mid)
    const sencondRow = items.slice(mid)

    return (
      <div style={{
        padding: '10px 20px'
      }}>
        <RestaurantFoodCardList foods={firstRow} />
        <RestaurantFoodCardList foods={sencondRow} />
      </div>
    )
  }
}

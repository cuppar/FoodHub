import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodCard from '../organisms/FoodCard';

export default class FoodSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props
    return (
      <div>
        {items && items.map((food, index) => (
          <div
            key={index}
            style={{
              padding: 5
            }}>
            <FoodCard
              food={food} />
          </div>
        ))}
      </div>
    )
  }
}

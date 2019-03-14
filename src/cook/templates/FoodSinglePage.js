import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodCardRow from './FoodCardRow';

export default class FoodSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props
    let firstRow, seconedRow, midIndex;
    midIndex = Math.ceil(items.length / 2)
    firstRow = items.slice(0, midIndex)
    seconedRow = items.slice(midIndex)

    return (
      <div style={{padding: 20}}>
        <FoodCardRow foods={firstRow} />
        <FoodCardRow foods={seconedRow} />
      </div>
    )
  }
}

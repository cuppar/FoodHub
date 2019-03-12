import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodPanelTitle from '../molecules/FoodPanelTitle';
import FoodCardGroup from '../molecules/FoodCardGroup';

export default class FoodPanel extends Component {
  static propTypes = {
    foodCategory: PropTypes.object.isRequired,
  }

  render() {
    const { foodCategoryName, foods } = this.props.foodCategory;
    return (
      <div style={{
        padding: 10
      }}>
        <FoodPanelTitle foodCategoryName={foodCategoryName} />
        <FoodCardGroup foods={foods} />
      </div>
    )
  }
}

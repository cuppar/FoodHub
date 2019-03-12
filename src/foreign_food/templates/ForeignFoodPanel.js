import React, { Component } from 'react'
import PropTypes from 'prop-types'
import routes from '../../utills/datas/routes';
import foreignFoodTabsData from '../datas/foreignFoodTabsData';
import FoodPanel from '../../utills/templates/FoodPanel';

export default class ForeignFoodPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.foreign_food.key)
  }

  render() {
    return (
      <div>
        <FoodPanel tabs={foreignFoodTabsData} />
      </div>
    )
  }
}

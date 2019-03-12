import React, { Component } from 'react'
import PropTypes from 'prop-types'
import routes from '../../utills/datas/routes';
import chineseFoodTabsData from '../datas/chineseFoodTabsData';
import FoodPanel from '../../utills/templates/FoodPanel';

export default class ChineseFoodPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.chinese_food.key)
  }

  render() {
    return (
      <div>
        <FoodPanel tabs={chineseFoodTabsData} />
      </div>
    )
  }
}

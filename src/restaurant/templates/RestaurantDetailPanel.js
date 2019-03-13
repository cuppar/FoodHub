import React, { Component } from 'react'
import PropTypes from 'prop-types'
import routes from '../../utills/datas/routes';
import RestaurantFoodSinglePage from './RestaurantFoodSinglePage';
import paginationTabs from '../../utills/templates/paginationTabs';
import restaurantFoodTabsData from '../datas/restaurantFoodTabsData';
import RestaurantIntroduce from '../organisms/RestaurantIntroduce';

let Tabs = paginationTabs(RestaurantFoodSinglePage, restaurantFoodTabsData)

export default class RestaurantDetailPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.restaurant.key)
  }

  render() {
    return (
      <div
        style={{
          margin: '0 40px'
        }}
      >
        <div style={{
          paddingTop: 40
        }}>
          <RestaurantIntroduce />
        </div>
        <div style={{
          padding: 10
        }}>
          <Tabs />
        </div>
      </div>
    )
  }
}

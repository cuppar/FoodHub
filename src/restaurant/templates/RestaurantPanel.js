import React, { Component } from 'react'
import restaurantTabsData from '../datas/restaurantTabsData';
import paginationTabs from '../../utills/templates/paginationTabs';
import RestaurantSinglePage from './RestaurantSinglePage';
import BannerCarousel from '../../utills/organisms/BannerCarousel';
import routes from '../../utills/datas/routes'
import PropTypes from 'prop-types'

export default class RestaurantPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.restaurant.key)
  }

  render() {
    let Tabs = paginationTabs(RestaurantSinglePage, restaurantTabsData)

    return (
      <div
        style={{
          margin: '0 40px'
        }}
      >
        <BannerCarousel />
        <div style={{
          padding: 20
        }}>
          <Tabs />
        </div>
      </div>
    )
  }
}

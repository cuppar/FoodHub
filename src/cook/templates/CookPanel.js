import React, { Component } from 'react'
import PropTypes from 'prop-types'
import routes from '../../utills/datas/routes';
import vegetableTabsData from '../datas/vegetableTabsData';
import foodTabsData from '../datas/foodTabsData';
import paginationTabs from '../../utills/templates/paginationTabs';
import BannerCarousel from '../../utills/organisms/BannerCarousel';
import VegetableSinglePage from '../templates/VegetableSinglePage'
import FoodSinglePage from '../templates/FoodSinglePage'


export default class CookPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.cook.key)
  }

  render() {
    let VegetableTabs = paginationTabs(VegetableSinglePage, vegetableTabsData)
    let FoodTabs = paginationTabs(FoodSinglePage, foodTabsData)

    return (
      <div>
        <BannerCarousel />
        <div style={{padding: 20}}>
          <VegetableTabs />
          <FoodTabs />
        </div>
      </div>
    )
  }
}


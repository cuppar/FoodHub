import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodDetailCard from '../organisms/FoodDetailCard';
import foodDetailData from '../datas/foodDetailData'
import routes from '../../utills/datas/routes';
import paginationTabs from '../../utills/templates/paginationTabs';
import CookBookSinglePage from '../templates/CookBookSinglePage';
import IngredientSinglePage from '../templates/IngredientSinglePage';
import ingredientTabsData from '../datas/ingredientTabsData'
import cookBookTabsData from '../datas/cookBookTabsData'

let CookBookTabs = paginationTabs(CookBookSinglePage, cookBookTabsData)
let IngredientTabs = paginationTabs(IngredientSinglePage, ingredientTabsData)

export default class FoodDetailPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.cook.key)
  }

  render() {
    return (
      <div>
        <FoodDetailCard foodDetail={foodDetailData} />
        <div style={{ padding: 20 }}>
          <IngredientTabs />
          <CookBookTabs />
        </div>
      </div>
    )
  }
}

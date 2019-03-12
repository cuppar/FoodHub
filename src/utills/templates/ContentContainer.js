import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePanel from '../../home/templates/HomePanel';
import ChineseFoodPanel from '../../chinese_food/templates/ChineseFoodPanel'
import routes from '../../utills/datas/routes';
import ForeignFoodPanel from '../../foreign_food/templates/ForeignFoodPanel';

export default class ContentContainer extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleSignUp: PropTypes.func.isRequired,
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  render() {
    const { handleLogin,
      handleSignUp,
      handleSelectedPageChange } = this.props

    return (
      <div>
        <Switch>
          {/* 首页 */}
          <Route exact path={routes.home.path} render={() => (
            <HomePanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 中国美食 */}
          <Route path={routes.chinese_food.path} render={() => (
            <ChineseFoodPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 外国美食 */}
          <Route path={routes.foreign_food.path} render={() => (
            <ForeignFoodPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />

          {/* 404 */}
          <Redirect to='/404' />
        </Switch>
      </div>
    )
  }
}

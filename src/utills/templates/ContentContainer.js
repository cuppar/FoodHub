import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePanel from '../../home/templates/HomePanel';

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
          <Route exact path='/' render={() => (
            <HomePanel
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd';

export default class UserInfo extends Component {
  static propTypes = {
    login: PropTypes.bool.isRequired,
    user: PropTypes.object,
  }

  render() {
    const { user, login } = this.props;

    return (
      login
        ? <div>
          <Icon type="user" />
          {' ' + (user && user.nickName ? user.nickName : '已登录')}
        </div>
        : <div><Icon type="user" />{' '}未登录</div>
    )
  }
}

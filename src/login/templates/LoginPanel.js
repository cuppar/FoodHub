import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginTag from '../organisms/LoginTag';
import { Tabs } from 'antd';
import SignUpTag from '../organisms/SignUpTag';

export default class LoginPanel extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    signUpedUsers: PropTypes.array.isRequired,
    history: PropTypes.object,
    handleSignUp: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      currentKey: 'login'
    }
  }

  handleChange = (key) => {
    this.setState({
      currentKey: key
    })
  }

  render() {
    const {
      handleLogin,
      signUpedUsers,
      handleSignUp,
      history } = this.props
    const { currentKey } = this.state

    return (
      <div style={{
        padding: '50px 0'
      }}>
        <Tabs
          defaultActiveKey={currentKey}
          onChange={this.handleChange}
          type='card'>
          <Tabs.TabPane
            style={{
              margin: '50px 0'
            }}
            tab={<div style={{
              width: 200,
              textAlign: "center"
            }}>
              登录
            </div>}
            key="login">
            <LoginTag
              signUpedUsers={signUpedUsers}
              handleLogin={handleLogin}
              history={history}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={<div style={{
              width: 200,
              textAlign: "center"
            }}>
              注册
          </div>}
            key="signUp">
            <SignUpTag
              handleSignUp={handleSignUp}
              signUpedUsers={signUpedUsers}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}

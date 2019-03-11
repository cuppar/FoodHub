import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom'

export default class LoginAndSignUpButton extends Component {
  static propTypes = {
    login: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  buttonStyle = {
    width: 90
  }

  handleLogoutButtonClick = (e) => {
    this.setState({
      visible: true
    })
  }

  handleOkLogout = (e) => {
    this.props.handleLogout()
    this.setState({
      visible: false
    })
  }

  handleCancleLogout = (e) => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { login } = this.props;
    const { visible } = this.state;
    const btn = login
      ? <div>
        <Button
          style={this.buttonStyle}
          type="danger"
          onClick={this.handleLogoutButtonClick}>注销</Button>
        <Modal
          visible={visible}
          title="注销确认"
          onOk={this.handleOkLogout}
          onCancel={this.handleCancleLogout}
        >
          <p>您确定要注销吗？</p>
        </Modal>
      </div>
      : <div>
        <Link to="/login">
          <Button
            style={this.buttonStyle}
            type="primary">
            登录/注册
          </Button>
        </Link>
      </div>

    return btn;
  }
}

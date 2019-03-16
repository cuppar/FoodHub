import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Row, Col, Checkbox, Button, Modal } from 'antd';
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {
  static propTypes = {
    signUpedUsers: PropTypes.array.isRequired,
    handleLogin: PropTypes.func.isRequired,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      isAutoLogin: false,
      userName: '',
      password: '',
      showPopUp: false
    }
  }

  componentDidMount(){
    console.log('this.props :', this.props);
  }

  handleLoginClick = (e) => {
    const { signUpedUsers, handleLogin, history } = this.props
    const { userName, password } = this.state

    for (let i = 0; i < signUpedUsers.length; i++) {
      if (userName === signUpedUsers[i].userName
        && password === signUpedUsers[i].password) {
        handleLogin(signUpedUsers[i])
        history.goBack()
        return;
      }
    }
    
    this.setState({
      showPopUp: true,
    })
  }

  handleModalOK = (e) => {
    this.setState({
      showPopUp: false,
    })
  }

  handleModalCancel = (e) => {
    this.setState({
      showPopUp: false,
    })
  }

  handleCheckboxChange = (e) => {
    this.setState({
      isAutoLogin: e.target.checked
    })
  }

  handleUserNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    const { isAutoLogin, userName, password, showPopUp } = this.state

    return (
      <div>
        <label style={{
          margin: '10px 0',
          fontSize: 20
        }}>
          用户名：
        <Input
            style={{ margin: '10px 0' }}
            onChange={this.handleUserNameChange}
            value={userName}
            placeholder="请输入用户名" />
        </label>
        <label style={{
          margin: '10px 0',
          fontSize: 20
        }}>
          密码：
          <Input
            style={{ margin: '10px 0' }}
            onChange={this.handlePasswordChange}
            value={password}
            placeholder="请输入密码" />
        </label>
        <Row>
          <Col span={18}>
            <Checkbox
              onChange={this.handleCheckboxChange}
              checked={isAutoLogin}>
              {' 自动登录'}
            </Checkbox>
          </Col>
          <Col span={6}>
            <Link to='/login'>
              忘记密码
            </Link>
          </Col>
        </Row>
        <Button
          style={{
            width: '100%',
            margin: '10px 0'
          }}
          onClick={this.handleLoginClick}
          type='primary'>
          登录
        </Button>
        <Modal
          title='登录失败'
          visible={showPopUp}
          onOk={this.handleModalOK}
          onCancel={this.handleModalCancel}
        >
          <p>用户名或密码错误!</p>
        </Modal>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Modal } from 'antd';

export default class SignUpTag extends Component {
  static propTypes = {
    handleSignUp: PropTypes.func.isRequired,
    signUpedUsers: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password_1: '',
      password_2: '',
      nickName: '',
      showModal: false,
      modalMsg: '',
    }
  }

  handleUserNameChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  handlePassword_1Change = (e) => {
    this.setState({
      password_1: e.target.value
    })
  }

  handlePassword_2Change = (e) => {
    this.setState({
      password_2: e.target.value
    })
  }

  handleNickNameChange = (e) => {
    this.setState({
      nickName: e.target.value
    })
  }

  handleModalOk = (e) => {
    this.setState({
      showModal: false
    })
  }

  handleModalCancle = (e) => {
    this.setState({
      showModal: false
    })
  }

  handleSignUpClick = (e) => {
    const {
      userName,
      password_1,
      password_2,
      nickName,
    } = this.state
    const {
      signUpedUsers,
      handleSignUp,
    } = this.props

    if (userName.trim() === '') {
      this.setState({
        modalMsg: '用户名不能为空',
        showModal: true
      })
      return;
    } else if (password_1.trim() === ''
      || password_2.trim() === '') {
      this.setState({
        modalMsg: '密码不能为空',
        showModal: true
      })
      return;
    }

    for (let i = 0; i < signUpedUsers.length; i++) {
      if (signUpedUsers[i].userName === userName) {
        this.setState({
          modalMsg: '用户名已存在',
          showModal: true
        })
        return;
      }
    }

    if (password_1 !== password_2) {
      this.setState({
        modalMsg: '两次密码不一致',
        showModal: true
      })
      return;
    }

    handleSignUp({
      userName: userName,
      nickName: nickName,
      password: password_1,
    })

    this.setState({
      showModal: true,
      modalMsg: '注册成功！'
    })
  }

  render() {
    const {
      userName,
      password_1,
      password_2,
      nickName,
      showModal,
      modalMsg
    } = this.state

    return (
      <div style={{
        margin: '50px 30%'
      }}>
        <label style={{
          fontSize: 20
        }}>
          用户名：
          <Input
            placeholder='请输入用户名'
            onChange={this.handleUserNameChange}
            value={userName} />
        </label>
        <label style={{
          fontSize: 20
        }}>
          密码：
          <Input
            placeholder='请输入密码'
            onChange={this.handlePassword_1Change}
            value={password_1} />
        </label>
        <label style={{
          fontSize: 20
        }}>
          确认密码：
          <Input
            placeholder='请确认密码'
            onChange={this.handlePassword_2Change}
            value={password_2} />
        </label>
        <label style={{
          fontSize: 20
        }}>
          昵称：
          <Input
            placeholder='请输入昵称'
            onChange={this.handleNickNameChange}
            value={nickName} />
        </label>
        <Button
          onClick={this.handleSignUpClick}
          style={{
            width: '100%',
            marginTop: 20
          }}
          type='primary'>
          注册
        </Button>
        <Modal
          title='注册'
          visible={showModal}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancle}
        >
          {modalMsg}
        </Modal>
      </div>
    )
  }
}

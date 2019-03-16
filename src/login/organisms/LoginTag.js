import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import LoginForm from '../molecules/LoginForm';
import QRCodeCard from '../molecules/QRCodeCard';

export default class LoginTag extends Component {
  static propTypes = {
    signUpedUsers: PropTypes.array.isRequired,
    handleLogin: PropTypes.func.isRequired,
    history: PropTypes.object,
  }

  render() {
    const { signUpedUsers, handleLogin, history } = this.props

    return (
      <div style={{
        minHeight: 20
      }}>
        <Row gutter={8}>
          <Col
            xs={{ span: 13, offset: 1}}
            sm={{ span: 13, offset: 1}}
            md={{ span: 12, offset: 2}}
            lg={{ span: 10, offset: 3}}
          >
            <LoginForm
              signUpedUsers={signUpedUsers}
              handleLogin={handleLogin}
              history={history}
            />
          </Col>
          <Col
            xs={{span: 8, offset: 1}}
            sm={{span: 8, offset: 1}}
            md={{span: 6, offset: 2}}
            lg={{span: 4, offset: 4}}
          >
            <QRCodeCard />
          </Col>
        </Row>
      </div>
    )
  }
}

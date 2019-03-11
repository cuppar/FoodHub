import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Row, Col } from 'antd';
import headerMenuItemList from '../datas/navHeaderData';
import LogoLink from '../molecules/LogoLink'
import SearchInNav from '../molecules/SearchInNav'
import UserInfo from '../molecules/UserInfo'
import LoginAndSignUpButton from '../molecules/LoginAndSignUpButton'
import NavLink from '../molecules/NavLink';

const Item = Menu.Item;
const wapperStyle = {
  borderBottom: '1px solid #e8e8e8',
  boxShadow: '0 -8px 20px 0px'
}

export default class NavHeader extends Component {
  static propTypes = {
    login: PropTypes.bool.isRequired,
    user: PropTypes.object,
    handleLogout: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      current: 'home',
    }
  }

  handleClick = (e) => {
    console.log('click e', e)
    console.log('e.key', e.key)
    this.setState({
      current: e.key,
    })
  }

  render() {
    const { login, user, handleLogout } = this.props;
    const { current } = this.state;

    let menu = (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Item key="home">
          <LogoLink />
        </Item>
        {headerMenuItemList.map(item => (
          <Item key={
            Array.from(item.path).slice(1).join('')
          }>
            <NavLink to={item.path}>{item.title}</NavLink>
          </Item>
        ))}
      </Menu>
    )

    return (
      <div style={wapperStyle}>
        <Row gutter={0}>
          <Col
            xs={{ span: 4, offset: 1 }}
            sm={{ span: 4, offset: 1 }}
            md={{ span: 9, offset: 0 }}
            lg={{ span: 9, offset: 0 }}
            xl={{ span: 14, offset: 0 }}
            xxl={{ span: 14, offset: 0 }}
          >
            {menu}
          </Col>
          <Col
            xs={{ span: 8, offset: 1 }}
            sm={{ span: 8, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            xxl={{ span: 4, offset: 1 }}
          >
            <div style={{
              margin: '4px 0'
            }}>
              <SearchInNav />
            </div>
          </Col>
          <Col
            xs={{ span: 4, offset: 1 }}
            sm={{ span: 4, offset: 1 }}
            md={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            xl={{ span: 2, offset: 1 }}
            xxl={{ span: 2, offset: 1 }}
          >
            <div style={{
              textAlign: "center",
              margin: '13px 0px'
            }}>
              <UserInfo login={login} user={user} />
            </div>
          </Col>
          <Col
            xs={{ span: 3, offset: 0 }}
            sm={{ span: 3, offset: 0 }}
            md={{ span: 3, offset: 0 }}
            lg={{ span: 3, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            xxl={{ span: 2, offset: 0 }}
          >
            <div style={{
              textAlign: "center",
              margin: '6px 0px'
            }}>
              <LoginAndSignUpButton
                login={login}
                handleLogout={handleLogout} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

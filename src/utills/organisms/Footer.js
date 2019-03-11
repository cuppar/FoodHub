import React, { Component } from 'react'
import FooterLinkGroupList from '../templates/FooterLinkGroupList';
import IconLinkGroup from '../templates/IconLinkGroup';
import { Row, Col } from 'antd';
import footerLinks from '../datas/footerLinksData';
import { Link } from 'react-router-dom';
import logo_touming from '../assets/images/logo_touming.png';


export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          padding: '20px 0 40px 0',
          borderTop: '1px solid #000',
          backgroundColor: '#eee'
        }}>
        <Row>
          <Col xs={6} sm={6} md={12} lg={12} xl={14} xxl={14}>
            <Link to='/'>
              <img
                style={{
                  width: '100%'
                }}
                src={logo_touming}
                alt="logo_touming: link to '/'" />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={6}>
            <FooterLinkGroupList linkss={footerLinks} />
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={4}>
            <IconLinkGroup />
          </Col>
        </Row>
      </div>
    )
  }
}

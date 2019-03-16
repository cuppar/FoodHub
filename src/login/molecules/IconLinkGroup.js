import React, { Component } from 'react'
import IconLink from '../../utills/molecules/IconLink';
import { Row, Col } from 'antd'
import qq from '../assets/images/denglu-qq-40x40.jpg';
import weibo from '../assets/images/denglu-weibo-40x40.jpg';
import weixin from '../assets/images/denglu-weixin-40x40.jpg';

export default class IconLinkGroup extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <IconLink
              to='/login'
              iconSrc={qq}
            />
          </Col>
          <Col span={8}>
            <IconLink
              to='/login'
              iconSrc={weibo}
            />
          </Col>
          <Col span={8}>
            <IconLink
              to='/login'
              iconSrc={weixin}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

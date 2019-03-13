import React, { Component } from 'react'
import { Row, Col } from 'antd';
import restaurantIntroduceData from '../datas/restaurantIntroduceData';
import { Typography } from 'antd'

export default class RestaurantIntroduce extends Component {
  render() {
    const { description, img } = restaurantIntroduceData
    return (
      <div>
        <Row>
          <Col
            style={{
              padding: 15
            }}
            span={10}
            offset={2}>
            <Typography.Title
              style={{ textAlign: 'center' }}
              level={2}>
              {description.title}
            </Typography.Title>
            <Typography.Paragraph
              style={{
                fontSize: 20
              }}
            >
              {description.detail}
            </Typography.Paragraph>
          </Col>
          <Col span={10}>
            <img
              style={{
                width: '100%'
              }}
              src={img.src}
              alt={img.alt} />
          </Col>
        </Row>
      </div>
    )
  }
}

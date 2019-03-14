import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Typography } from 'antd';

export default class FoodDetailCard extends Component {
  static propTypes = {
    foodDetail: PropTypes.object.isRequired,
  }

  render() {
    const { img, title, author, description } = this.props.foodDetail

    return (
      <div>
        <Card>
          <Row gutter={{ xs: 8, sm: 16 }}>
            <Col span={10}>
              <img
                style={{ width: '100%' }}
                src={img.src}
                alt={img.alt} />
            </Col>
            <Col span={14}>
              <Typography.Title level={3}>
                {title}
              </Typography.Title>
              <Typography.Title level={4}>
                {author}
              </Typography.Title>
              <Typography.Paragraph style={{fontSize: 24 }}>
                {description}
              </Typography.Paragraph>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

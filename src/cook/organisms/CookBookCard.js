import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography, Card, Row, Col } from 'antd';

export default class CookBookCard extends Component {
  static propTypes = {
    cookBookStep: PropTypes.object.isRequired,
  }

  render() {
    const { cookBookStep } = this.props

    return (
      <div>
        <Card>
          <Row gutter={{ xs: 8, sm: 16 }}>
            <Col span={10}>
              <img
                style={{ width: '100%' }}
                src={cookBookStep.img.src}
                alt={cookBookStep.img.alt} />
            </Col>
            <Col span={14}>
              <Typography.Paragraph style={{ fontSize: 24 }}>
                {cookBookStep.description}
              </Typography.Paragraph>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

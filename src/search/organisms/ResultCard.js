import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Typography } from 'antd';
import { Link } from 'react-router-dom'

export default class ResultCard extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  }

  render() {
    const { result } = this.props

    return (
      <div>
        <Link to={result.path}>
          <Card style={{ padding: 10 }}>
            <Row gutter={8}>
              <Col span={4}>
                <img
                  style={{ width: '100%' }}
                  src={result.img.src}
                  alt={result.img.alt} />
              </Col>
              <Col
                style={{ padding: 10 }}
                span={20}>
                <Typography.Title level={4}>
                  {result.title}
                </Typography.Title>
                <Typography.Text disabled>
                  {result.time}
                </Typography.Text>
                <Typography.Paragraph>
                  {result.description}
                </Typography.Paragraph>
              </Col>
            </Row>
          </Card>
        </Link>
      </div>
    )
  }
}

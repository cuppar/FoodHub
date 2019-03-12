import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Typography } from 'antd';

export default class FoodPanelTitle extends Component {
  static propTypes = {
    foodCategoryName: PropTypes.string.isRequired,
  }

  render() {
    const { foodCategoryName } = this.props;
    return (
      <Row>
        <Col
          xs={8}
          sm={9}
          md={10}
          lg={10}
          xl={10}
          xxl={10}
        >
          <div style={{
            height: 2,
            backgroundColor: '#000',
            margin: '12px 0'
          }} />
        </Col>
        <Col
          xs={8}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          xxl={4}
        >
          <Typography.Title
            style={{
              textAlign: 'center'
            }}
            level={3}>
            {foodCategoryName}
          </Typography.Title>
        </Col>
        <Col
          xs={8}
          sm={9}
          md={10}
          lg={10}
          xl={10}
          xxl={10}
        >
          <div style={{
            height: 2,
            backgroundColor: '#000',
            margin: '12px 0'
          }} />
        </Col>
      </Row>
    )
  }
}

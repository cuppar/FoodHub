import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodCard from '../../home/molecules/FoodCard'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';

export default class HealthSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props

    return (
      <div>
        <Row gutter={{ xs: 8, sm: 16 }}>
          {items.map((item, index) => (
            <Col
              style={{ padding: 10 }}
              key={index}
              span={Math.floor(24 / items.length)}>
              <Link
                to={item.path}>
                <FoodCard food={item.health} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

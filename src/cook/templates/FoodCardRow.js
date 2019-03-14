import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import FoodCard from '../molecules/FoodCard';

export default class FoodCardRow extends Component {
  static propTypes = {
    foods: PropTypes.array.isRequired,
  }

  render() {
    const { foods } = this.props
    return (
      <div style={{ padding: 10 }}>
        <Row gutter={{ xs: 8, sm: 16 }}>
          {foods && foods.map((food, index) => (
            <Col
              key={index}
              span={Math.floor(24 / foods.length)}>
              <FoodCard food={food} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

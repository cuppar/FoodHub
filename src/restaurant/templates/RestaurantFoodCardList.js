import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import FoodCard from '../../home/molecules/FoodCard';

export default class RestaurantFoodCardList extends Component {
  static propTypes = {
    foods: PropTypes.array.isRequired,
  }

  render() {
    const { foods } = this.props

    return (
      <div>
        <Row gutter={8}>
          {foods.map((food, index) => (
            <Col
              key={index}
              span={
                Math.floor(24 / foods.length)
              }>
              <div style={{
                padding: 10
              }}>
                <FoodCard food={food} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

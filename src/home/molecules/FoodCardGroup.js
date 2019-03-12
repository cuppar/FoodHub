import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom'

export default class FoodCardGroup extends Component {
  static propTypes = {
    foods: PropTypes.array,
  }

  render() {
    const { foods } = this.props;
    return (
      <Row
        style={{
          padding: '20px 40px'
        }}
        gutter={{ xs: 8, sm: 8, md: 16 }}>
        {foods
          ? foods.map((food, index) => (
            <Col key={index} span={Math.floor(24 / foods.length)}>
              <Link to={food.path}>
                <FoodCard food={food} />
              </Link>
            </Col>
          ))
          : null
        }
      </Row>
    )
  }
}

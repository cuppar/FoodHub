import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodCard from '../../home/molecules/FoodCard';
import { Row, Col } from 'antd';

export default class IngredientSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props
    return (
      <div style={{ padding: '10px 20px' }}>
        <Row gutter={{ xs: 8, sm: 16 }}>
          {items.map((item, index) => (
            <Col
              style={{ padding: 10 }}
              key={index}
              span={Math.floor(24 / items.length)}>
              <FoodCard
                food={item} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

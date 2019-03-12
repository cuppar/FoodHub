import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd';

export default class FoodCard extends Component {
  static propTypes = {
    food: PropTypes.object.isRequired,
  }

  render() {
    const { food } = this.props;
    return (
      <Card
        hoverable
        cover={
          <img src={food.imgSrc} alt={food.foodName} />
        }
      >
        <Card.Meta
          style={{
            textAlign: 'center'
          }}
          title={food.foodName}
        />
      </Card>
    )
  }
}

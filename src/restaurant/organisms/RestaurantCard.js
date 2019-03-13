import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import RestaurantCardDetail from '../molecules/RestaurantCardDetail';

export default class RestaurantCard extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired,
  }

  render() {
    const { restaurant } = this.props

    return (
      <div style={{
        padding: 5
      }}>
        <Row gutter={8}>
          <Col span={10}>
            <Link
              to={restaurant.img.path}>
              <img
                style={{
                  width: '100%'
                }}
                src={restaurant.img.src}
                alt={restaurant.img.alt} />
            </Link>
          </Col>
          <Col span={14}>
            <RestaurantCardDetail
              imgs={restaurant.detailImgs}
              description={restaurant.description} />
          </Col>

        </Row>
      </div>
    )
  }
}

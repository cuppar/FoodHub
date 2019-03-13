import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'

export default class RestaurantCardDetailImgList extends Component {
  static propTypes = {
    imgs: PropTypes.array.isRequired,
  }

  render() {
    const { imgs } = this.props

    return (
      <div>
        <Row gutter={8}>
          {imgs.map(img => (
            <Col key={img.id} span={
              Math.floor(24 / imgs.length)
            }>
              <Link to={img.path}>
                <img
                  style={{
                    width: '100%'
                  }}
                  src={img.src}
                  alt={img.alt} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

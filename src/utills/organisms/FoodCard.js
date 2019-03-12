import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom'
import CardImg from '../molecules/CardImg';
import CardTypography from '../molecules/CardTypography';

export default class FoodCard extends Component {
  static propTypes = {
    food: PropTypes.object.isRequired,
  }

  render() {
    const { path, imgSrc, description } = this.props.food
    return (
      <div>
        <Link to={path}>
          <Card>
            <Row gutter={{ xs: 8, sm: 16 }}>
              <Col span={10}>
                <CardImg src={imgSrc} />
              </Col>
              <Col span={14}>
                <CardTypography description={description} />
              </Col>
            </Row>
          </Card>
        </Link>
      </div>
    )
  }
}

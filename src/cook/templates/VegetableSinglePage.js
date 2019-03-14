import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VegetableCard from '../molecules/VegetableCard';
import { Row, Col } from 'antd';

export default class VegetableSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props
    return (
      <div style={{
        padding: 20
      }}>
        <Row gutter={{xs: 8, sm: 16}}>
          {items.map((vegetable, index) => (
            <div
              key={index}
            >
              <Col span={Math.floor(24 / items.length)}>
                <VegetableCard vegetable={vegetable} />
              </Col>
            </div>
          ))}
        </Row>
      </div>
    )
  }
}

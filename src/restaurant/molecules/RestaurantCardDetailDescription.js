import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd';

export default class RestaurantCardDetailDescription extends Component {
  static propTypes = {
    description: PropTypes.object.isRequired,
  }

  render() {
    const { description } = this.props

    return (
      <div>
        <Typography.Title level={4}>
          {description.title}
        </Typography.Title>
        <Typography.Paragraph ellipsis={{
          rows: 3, expandable: true
        }}>
          {description.detail}
        </Typography.Paragraph>
      </div>
    )
  }
}

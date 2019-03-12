import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd';

export default class CardTypography extends Component {
  static propTypes = {
    description: PropTypes.object.isRequired,
  }

  render() {
    const { title, material, ingredients, cookBook } = this.props.description;
    return (
      <div style={{
        // maxHeight: 200,
        overflow: 'auto',
        padding: 5
      }}>
        {title && <Typography.Title level={4}>{title}</Typography.Title>}
        {material && <Typography type="secondary">{material}</Typography>}
        {ingredients && <Typography type="secondary">{ingredients}</Typography>}
        {cookBook && cookBook.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
      </div>
    )
  }
}

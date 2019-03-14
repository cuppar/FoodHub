import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Typography } from 'antd';

export default class FoodCard extends Component {
  static propTypes = {
    food: PropTypes.object.isRequired,
  }

  render() {
    const { img, path, title, author, material } = this.props.food

    return (
      <div>
        <Link to={path}>
          <Card
            cover={
              <img
                style={{
                  width: '100%'
                }}
                src={img.src}
                alt={img.alt} />
            }
          >
            <Typography.Title
              style={{
                textAlign: 'center'
              }}
              level={4}>
              {title}
            </Typography.Title>
            <Typography>
              {author}
            </Typography>
            <Typography>
              {material}
            </Typography>
          </Card>
        </Link>
      </div>
    )
  }
}

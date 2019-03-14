import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from 'antd'
import { Link } from 'react-router-dom';

export default class VegetableCard extends Component {
  static propTypes = {
    vegetable: PropTypes.object.isRequired,
  }

  render() {
    const { img, path, title } = this.props.vegetable

    return (
      <div>
        <Link to={path}>
          <Card
            cover={
              <img
                style={{
                  borderRadius: '50%',
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
          </Card>
        </Link>
      </div>
    )
  }
}

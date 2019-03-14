import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography, Card } from 'antd';
import { Link } from 'react-router-dom'

export default class ArticleCard extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  }

  render() {
    const { article } = this.props

    return (
      <div>
        <Link to={article.path}>
          <Card>
            <Typography.Title level={3}>
              {article.title}
            </Typography.Title>
            <Typography.Text disabled>
              {article.time}
            </Typography.Text>
            <Typography.Paragraph>
              {article.description}
            </Typography.Paragraph>
          </Card>
        </Link>
      </div>
    )
  }
}

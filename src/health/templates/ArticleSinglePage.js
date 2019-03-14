import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleCard from '../organisms/ArticleCard';

export default class ArticleSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props
    return (
      <div>
        {items.map((article, index) => (
          <div
            style={{ padding: 5 }}
            key={index}
          >
            <ArticleCard
              article={article} />
          </div>
        ))}
      </div>
    )
  }
}

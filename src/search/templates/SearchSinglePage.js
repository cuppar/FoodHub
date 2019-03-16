import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ResultCard from '../organisms/ResultCard';

export default class SearchSinglePage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render() {
    const { items } = this.props

    return (
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ padding: 5 }}
          >
            <ResultCard result={item} />
          </div>
        ))}
      </div>
    )
  }
}

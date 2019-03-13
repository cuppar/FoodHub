import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RestaurantCardDetailDescription from './RestaurantCardDetailDescription';
import RestaurantCardDetailImgList from './RestaurantCardDetailImgList';

export default class RestaurantCardDetail extends Component {
  static propTypes = {
    description: PropTypes.object.isRequired,
    imgs: PropTypes.array.isRequired,
  }

  render() {
    const { description, imgs } = this.props

    return (
      <div>
        <RestaurantCardDetailDescription description={description} />
        <RestaurantCardDetailImgList imgs={imgs} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodPanel from '../organisms/FoodPanel';
import { Pagination } from 'antd';

export default class FoodPanelList extends Component {
  static propTypes = {
    foodCategorys: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }

  handleChange = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    const { foodCategorys } = this.props;
    const { currentPage } = this.state;
    let fragmentsOfFoodCategorys = [];
    const fragmentSize = 2;
    const len = foodCategorys.length;

    for (let i = 0; i < len; i += fragmentSize) {
      let nextTail = i + fragmentSize
      if (nextTail > len) {
        let minTail = Math.min(len, nextTail)
        fragmentsOfFoodCategorys.push(foodCategorys.slice(i, minTail))
      } else {
        fragmentsOfFoodCategorys.push(foodCategorys.slice(i, nextTail))
      }
    }

    console.log('fragmentsOfFoodCategorys', fragmentsOfFoodCategorys)
    console.log('foodCategorys.length', foodCategorys.length)

    return (
      <div>
        {fragmentsOfFoodCategorys
          ? <div>
            {fragmentsOfFoodCategorys[currentPage - 1]
              .map((foodCategory, index) => (
                <FoodPanel
                  key={index}
                  foodCategory={foodCategory}
                />
              ))}
            <div
              style={{
                textAlign: 'center',
                padding: 8
              }}
            >
              <Pagination
                current={currentPage}
                onChange={this.handleChange}
                total={foodCategorys.length}
                pageSize={fragmentSize}
              />
            </div>
          </div>
          : null}
      </div>
    )
  }
}

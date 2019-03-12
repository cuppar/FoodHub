import React, { Component } from 'react'
import foodCategorys from '../datas/foodCategorysData'
import { Row, Col } from 'antd';
import Banner from '../organisms/Banner'
import FoodPanelList from '../templates/FoodPanelList'
import PropTypes from 'prop-types';
import routes from '../../utills/datas/routes'

export default class HomePanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.home.key)
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Banner />
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
            xxl={{ span: 20, offset: 2 }}
          >
            <FoodPanelList foodCategorys={foodCategorys} />
          </Col>
        </Row>
      </div>
    )
  }
}

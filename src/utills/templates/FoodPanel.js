import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FoodSinglePage from './FoodSinglePage';
import paginationTabs from './paginationTabs';
import BannerCarousel from '../organisms/BannerCarousel';
import SideBar from '../organisms/SideBar';
import { Row, Col } from 'antd';


export default class FoodPanel extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
  }

  render() {
    const { tabs } = this.props;
    let FooodTabs = paginationTabs(FoodSinglePage, tabs)

    return (
      <div
        style={{
          margin: '0px 40px'
        }}
      >
        <BannerCarousel />
        <div
          style={{
            padding: '20px 40px'
          }}
        >
          <Row gutter={{ xs: 8, sm: 16 }}>
            <Col
              xs={{ span: 18, offset: 0 }}
              sm={{ span: 18, offset: 0 }}
              md={{ span: 18, offset: 0 }}
              lg={{ span: 18, offset: 0 }}
              xl={{ span: 18, offset: 0 }}
              xxl={{ span: 18, offset: 0 }}
            >
              <FooodTabs />
            </Col>
            <Col
              xs={{ span: 6, offset: 0 }}
              sm={{ span: 6, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
              xl={{ span: 6, offset: 0 }}
              xxl={{ span: 6, offset: 0 }}
            >
              <SideBar />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

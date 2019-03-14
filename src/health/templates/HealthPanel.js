import React, { Component } from 'react'
import PropTypes from 'prop-types'
import routes from '../../utills/datas/routes';
import paginationTabs from '../../utills/templates/paginationTabs';
import HealthSinglePage from './HealthSinglePage';
import ArticleSinglePage from './ArticleSinglePage';
import AdSinglePage from './AdSinglePage';
import healthTabsData from '../datas/healthTabsData'
import articleTabsData from '../datas/articleTabsData';
import adTabsData from '../datas/adTabsData';
import { Row, Col } from 'antd';

let HealthTabs = paginationTabs(HealthSinglePage, healthTabsData)
let ArticleTabs = paginationTabs(ArticleSinglePage, articleTabsData)
let AdTabs = paginationTabs(AdSinglePage, adTabsData)


export default class HealthPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.health.key)
  }


  render() {
    return (
      <div>
        <HealthTabs />
        <Row gutter={16}>
          <Col
            style={{ padding: 10 }}
            span={18}>
            <ArticleTabs />
          </Col>
          <Col
            style={{ padding: 10 }}
            span={6}>
            <AdTabs />
          </Col>
        </Row>
      </div>
    )
  }
}

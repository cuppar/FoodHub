import React, { Component } from 'react'
import PropTypes from 'prop-types'
import routes from '../../utills/datas/routes';
import paginationTabs from '../../utills/templates/paginationTabs';
import SearchSinglePage from './SearchSinglePage';
import searchTabsData from '../datas/searchTabsData';
import SearchInNav from '../../utills/molecules/SearchInNav'
import LogoLink from '../../utills/molecules/LogoLink';
import bgImg from '../assets/images/beiJing.jpg';

let Tabs = paginationTabs(SearchSinglePage, searchTabsData)

export default class SearchPanel extends Component {
  static propTypes = {
    handleSelectedPageChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.handleSelectedPageChange(routes.home.key)
  }

  render() {
    return (
      <div style={{
        backgroundImage: bgImg,
      }}>
        <div style={{
          textAlign: "center",
          padding: '40px',
        }}>
          <div>
            <LogoLink />
          </div>
        </div>
        <div style={{
          textAlign: "center",
          padding: '20px 200px'
        }}>
          <SearchInNav />
        </div>
        <div style={{
          padding: 40
        }}>
          <Tabs />
        </div>
      </div>
    )
  }
}

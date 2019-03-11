import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Input, AutoComplete } from 'antd';
import items from '../../home/datas/sideMenuData';
import NavLink from './NavLink';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

let renderTitle = (item) => (
  <span>
    <span style={{ fontSize: 16, color: '#00f' }}>
      {item.title}
    </span>
    <NavLink
      style={{
        float: 'right'
      }}
      to={item.url}>更多</NavLink>
  </span>
)

const options = items.map(item => (
  <OptGroup
    key={item.title}
    label={renderTitle(item)}>
    {item.children.map(subItem => (
      <Option
        key={subItem.title}
        value={subItem.title}>
        {subItem.title}
        <span
          style={{
            float: 'right',
            color: '#bbb'
          }}
        >
          {Math.round(Math.random() * 10000)}
          人{' '}关注
          </span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option
    disabled
    key='all'
  >
    <div
      style={{
        backgroundColor: '#eee',
        textAlign: 'center',
      }}>
      <NavLink
        style={{
          fontSize: 16
        }}
        to='/cook'>
        查看所有结果
    </NavLink>
    </div>
  </Option>
])

export default class SearchInNav extends Component {
  static propTypes = {
    handleSearchTextChange: PropTypes.func,
  }

  handleInputChange = (e) => {
    this.props.handleSearchTextChange(e.target.value)
  }

  render() {
    return (
      <div
        style={{
          width: '100%'
        }}>
        <AutoComplete
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 250 }}
          size="large"
          style={{ width: '100%' }}
          dataSource={options}
          placeholder="search something"
          optionLabelProp='value'
        >
          <Input
            // onChange={this.handleInputChange}
            onChange={(e) => console.log('e', e)}
            suffix={
              <NavLink to="/search" >
                <Icon type="search" />
              </NavLink>
            } />
        </AutoComplete>
      </div>
    )
  }
}

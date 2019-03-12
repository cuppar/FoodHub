import React, { Component } from 'react'
import { List, Typography } from 'antd'
import msgsData from '../datas/msgsData';
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: '#f8f8f8'
      }}>
        <List
          header={<Typography.Title
            level={3}>
            {'美食资讯'}
          </Typography.Title>}
          bordered
          dataSource={msgsData}
          renderItem={(item) => (
            <Link to={item.path}>
              <Typography style={{
                padding: 4
              }}>
                {item.title}
              </Typography>
            </Link>
          )}
        />
      </div>
    )
  }
}
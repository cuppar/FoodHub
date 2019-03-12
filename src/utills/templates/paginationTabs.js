import React, { Component } from 'react'
import { Tabs, Pagination } from 'antd';

const TabPane = Tabs.TabPane;

export default function paginationTabs(WrappedComponent, tabs) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentPage: 1,
        tabKey: tabs[0].key,
      }
    }

    handlePageChange = (page) => {
      this.setState({
        currentPage: page
      })
    }

    handleTabChange = (tabKey) => {
      this.setState({
        tabKey: tabKey,
        currentPage: 1,
      })
    }

    render() {
      const { currentPage, tabKey } = this.state

      return (
        <Tabs
          defaultActiveKey={tabKey}
          onChange={this.handleTabChange}
        >
          {tabs.map((tab, index) => {
            let len = tab.items.length
            let fragmentSize = tab.itemPerPage
            let fragmentsOfItems = []

            for (let i = 0; i < len; i += fragmentSize) {
              let nextTail = i + fragmentSize
              if (nextTail > len) {
                fragmentsOfItems.push(tab.items.slice(i, len))
              } else {
                fragmentsOfItems.push(tab.items.slice(i, nextTail))
              }
            }

            return (
              <TabPane
                key={tab.key}
                tab={tab.title}>
                <WrappedComponent
                  items={fragmentsOfItems[currentPage - 1]}
                />
                {
                  fragmentsOfItems && fragmentsOfItems.length > 1
                    ? <Pagination
                      style={{ textAlign: 'center' }}
                      onChange={this.handlePageChange}
                      total={len}
                      current={currentPage}
                      pageSize={fragmentSize}
                    />
                    : null
                }
              </TabPane>
            )
          })}
        </Tabs>
      )
    }
  }
}

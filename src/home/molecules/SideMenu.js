import React, { Component } from 'react'
import sideMenu from '../datas/sideMenuData'
import { Menu } from 'antd'
import NavLink from '../../utills/molecules/NavLink'

const { SubMenu, Item, ItemGroup } = Menu;


export default class SideMenu extends Component {
  render() {
    return (
      <div style={{
        width: '20%',
        opacity: 0.85,
      }}>
        <Menu
          style={{
            minHeight: 400,
            backgroundColor: '#f0fafa'
          }}
          mode="vertical">
          {sideMenu.map((item, index) => (
            <SubMenu
              title={<span style={{
                fontSize: 22,
              }}>
                {item.title}
              </span>
              }
              style={{
                padding: 25,
              }}
              key={index}>
              <ItemGroup
                title={<span style={{
                  fontSize: 18,
                }}>
                  {item.title}
                </span>
                }>
                {item.children.map((subItem, index) => (
                  <Item
                    style={{
                      backgroundColor: '#f0fafa'
                    }}
                    key={subItem.title}>
                    <NavLink
                      to={subItem.url}
                      style={{
                        fontSize: 20,
                        padding: 5
                      }}>
                      {subItem.title}
                    </NavLink>
                  </Item>
                ))}
              </ItemGroup>
            </SubMenu>
          ))}
        </Menu>
      </div>
    )
  }
}

import React, { Component } from 'react'
import IconLink from '../molecules/IconLink';
import weiboIcon from '../assets/images/weibo.png'
import bilibiliIcon from '../assets/images/bilibili.png'

export default class IconLinkGroup extends Component {
  render() {
    return (
      <span>
        <span style={{ padding: 4 }}>
          <IconLink
            to='/404'
            iconSrc={weiboIcon} />
        </span>
        <span style={{ padding: 4 }}>
          <IconLink
            to='/404'
            iconSrc={bilibiliIcon} />
        </span>
      </span>
    )
  }
}

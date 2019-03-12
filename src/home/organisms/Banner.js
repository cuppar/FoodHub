import React, { Component } from 'react'
import SideMenu from '../molecules/SideMenu';
import imgBanner from '../assets/images/home_banner.png';
import {Link} from 'react-router-dom';

export default class Banner extends Component {
  render() {
    const imgBannerHeight = 400;
    return (
      <div style={{
        position: 'relative',
        height: imgBannerHeight
      }}>
        <Link to='/cook'>
          <img
            style={{
              position: 'absolute',
              width: '100%',
              height: 400
            }}
            src={imgBanner}
            alt="home_banner" />
        </Link>
        <SideMenu style={{
          position: 'absolute',
          height: '100%',
          width: '20%'
        }} />
      </div>
    )
  }
}

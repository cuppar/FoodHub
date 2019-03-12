import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import bannersData from '../datas/bannersData';

export default class BannerCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay effect='fade'>
          {bannersData.map((banner, index) => (
            <Link
              key={index}
              to={banner.path}>
              <img
                style={{
                  width: '100%',
                  maxHeight: 400,
                }}
                src={banner.src}
                alt={banner.title}
              />
            </Link>
          ))}
        </Carousel>
      </div>
    )
  }
}

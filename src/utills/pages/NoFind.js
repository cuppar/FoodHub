import React, { Component } from 'react'
import imgSrc from '../assets/images/404.jpg'

export default class NoFind extends Component {
  render() {
    return (
      <div>
        <div style={{
          textAlign: 'center',
          fontSize: 40,
          color: 'red'
        }}>
          正在开发中！
        </div>
        <img
          style={{ width: '100%' }}
          src={imgSrc}
          alt="404" />
      </div>
    )
  }
}

import React, { Component } from 'react'
import qrcode from '../assets/images/denglu-erweima.jpg';
import { Typography } from 'antd';


export default class QRCode extends Component {
  render() {
    return (
      <div style={{
        textAlign: "center"
      }}>
        <img
          style={{
            padding: 10,
            height: 150
          }}
          src={qrcode}
          alt='二维码' />
        <Typography.Title
          style={{ textAlign: 'center' }}
          level={3}>
          {'APP扫码登录'}
        </Typography.Title>
      </div>
    )
  }
}

import React, { Component } from 'react'
import QRCode from './QRCode';
import IconLinkGroup from './IconLinkGroup';

export default class QRCodeCard extends Component {
  render() {
    return (
      <div style={{
      }}>
        <QRCode />
        <div style={{
          margin: 10
        }}>
          <IconLinkGroup />
        </div>
      </div>
    )
  }
}

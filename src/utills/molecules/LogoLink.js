import React, { Component } from 'react'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default class LogoLink extends Component {
  render() {
    return (
      <Link to='/'>
        <img
          src={logo}
          alt="foodhub-logo" />
      </Link>
    )
  }
}

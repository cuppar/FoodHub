import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class IconLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.img = React.createRef();
    this.state = {
      style: {}
    }
  }

  componentDidMount() {
    let min = Math.min(this.img.current.width, this.img.current.height)
    
    // console.log('this.img.current', this.img.current)
    // console.log('this.img.current.width', this.img.current.width)
    // console.log('this.img.current.height', this.img.current.height)
    // console.log('min :', min);

    this.setState({
      style: {
        borderRadius: '50%',
        width: min + 'px',
        height: min + 'px',
        overflow: 'hidden',
      }
    })
  }

  render() {
    return (
      <Link
        to={this.props.to}>
        <div
          style={this.state.style}>
          <img
            ref={this.img}
            src={this.props.iconSrc}
            alt={'link to ' + this.props.to} />
        </div>
      </Link>
    )
  }
}

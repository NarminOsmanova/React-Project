import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFoundPage extends Component {
  render() {
    return (
        <Link to="/">
        <img src="https://i.pinimg.com/originals/0b/21/9f/0b219f91b508342ff91c997e16afeca4.gif" width={1348} height={200} className='img-fluid' alt="" />
        </Link>
    )
  }
}

export default NotFoundPage

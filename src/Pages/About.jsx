import React, { Component } from 'react'
// import img from '../assets/img/img-about.jpg.webp'
import img1 from '../assets/img/star-03.png'
import img2 from '../assets/img/unique-03.png'
import img3 from '../assets/img/quality-03.png'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container-fluid mb-5 pb-5">
          <div className="row">
            <div className="col-12">
              <p>About Us</p>
            </div>
          </div>
          <div className="row">
            <iframe width="1320" height="515" src="https://www.youtube.com/embed/w47z_wz6XBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className="container-fluid pb-5">
          <div className="row">
            <div className="d-flex col-12 col-sm-12 col-md-4">
              <div className='d-flex justify-content-center align-items-center me-4'>
                <img src={img1} width={49} height={49} alt="" className='' />
              </div>
              <div className="text">
                <h3>FREE GIFT WRAP</h3>
                <p>Donec quam felis, ultricies nec, pellentesque eu,<br /> pretium quis, sem. Nulla consequat massa quis <br /> enim.</p>
              </div>
            </div>
            <div className="d-flex col-12 col-sm-12 col-md-4">
              <div className='d-flex justify-content-center align-items-center me-4'>
                <img src={img2} width={49} height={49} alt="" className='' />
              </div>
              <div className="text">
                <h3>FREE DELIVERY WORLDWIDE</h3>
                <p>Donec quam felis, ultricies nec, pellentesque eu,<br /> pretium quis, sem. Nulla consequat massa quis <br /> enim.</p>
              </div>
            </div>
            <div className="d-flex col-12 col-sm-12 col-md-4">
              <div className='d-flex justify-content-center align-items-center me-4'>
                <img src={img3} width={49} height={49} alt="" className='' />
              </div>
              <div className="text">
                <h3>ONLINE ORDERING</h3>
                <p>Donec quam felis, ultricies nec, pellentesque eu,<br /> pretium quis, sem. Nulla consequat massa quis <br /> enim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
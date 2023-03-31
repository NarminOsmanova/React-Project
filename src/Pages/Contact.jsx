import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <h1>Contact</h1>
              <div className="d-flex">
              <Link className='text-decoration-none text-dark me-2' to={'/'}>Home</Link>
              <span><i className="fa-solid fa-angle-right"></i></span> 
              <Link className='text-decoration-none text-dark ms-2' to={'/contact'}>Contact</Link> 
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.1993960357!2d-0.119554!3d51.503297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1675111533802!5m2!1sen!2sus" width={1330} height={450} style={{border: 0}} allowFullScreen loading="lazy" title='map' referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="row g-3">
              <div className="background d-flex justify-content-center align-items-center">
              <div className="col-sm-12 d-none d-md-block col-md-3 me-5 text-center text-white">
                  <span className='icon'><i className="fa-solid fa-location-dot"></i></span>
                  <div className="text fw-semibold">
                    <span>Adress</span>
                    <p>807 Mize Cemetery Rd, Somerset KY, 42503</p>
                  </div>
                </div>
              <div className="col-sm-12 col-md-3 me-5 text-center text-white">
                  <span className='icon'><i className="fa-solid fa-phone"></i></span>
                  <div className="text fw-semibold">
                    <span>Phone</span>
                    <p>+84 (007) 1996-5432</p>
                  </div>
                </div>
              <div className="col-sm-12 d-none d-md-block  col-md-3 text-center text-white ">
                  <span className='icon'><i className="fa-regular fa-envelope"></i></span>
                  <div className="text fw-semibold">
                    <span>Email</span>
                    <p>sayhello@tikie.com</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="background2">
          <div className="row">
              <div className="col-12 col-sm-12 col-md-6">
                
              </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <form action="">
                      <h2>SEND US A MESSAGE</h2>
                      <input type="text"  placeholder='Your name'/>
                      <input type="email" name="" id="" placeholder='Your email' /> <br />
                      <textarea name="" placeholder='Your message...' id="" cols="40" rows="10"></textarea><br />
                      <input type="submit" value="Send" />
                    </form>
                </div>
            
          </div>
          </div>
        </div>
      </div>    
    )
  }
}

export default Contact
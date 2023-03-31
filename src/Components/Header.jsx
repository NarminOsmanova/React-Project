// import React, { Component } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/img/logo-white.png.webp";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-mobile d-none d-lg-block ">
          <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid">
              <a href="/" className="navbar-brand fs-6 text-secondary">
                HOTLINE:+84-(007)-1996-5432
              </a>
              <div className="d-flex">
                <span>
                  <i className="fa-brands fa-twitter fs-6 me-3 text-secondary" />
                </span>
                <span>
                  <i className="fa-brands fa-instagram fs-6 me-3 text-secondary" />
                </span>
                <span>
                  <i className="fa-brands fa-dribbble fs-6 me-3 text-secondary" />
                </span>
                <span>
                  <i className="fa-brands fa-behance fs-6 me-3 text-secondary" />
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div className="header-desktop">
          <div className="header-top">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <img
                  src="https://narminosmanova.github.io/Tikie/static/media/logo-white.png.82955ef184285915dd5c.webp"
                  width={160}
                  height={40}
                  alt=""
                />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="navbar-nav col-6 mx-auto mb-2 mb-lg-0">
                    <div className="input-group  d-none d-lg-flex">
                      <button
                        className="fw-semibold btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        All Category
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            Children's book
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Fairytale
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Fiction & Fantasy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Health & Dieting
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Horror
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Love story
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Miracle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Travel
                          </a>
                        </li>
                      </ul>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for books by keyword"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa-brands fa-searchengin text-dark fw-semibold"></i>
                      </button>
                    </div>
                  </div>
                  <div className="navbar-nav d-none d-lg-flex  mb-2 mb-lg-0">
                    <div className="d-flex hr">
                      <a
                        href="/"
                        className="me-2 d-flex justify-content-center align-items-center"
                      >
                        <i className="fa-solid fa-user text-white"></i>
                      </a>
                      <div className="text-white me-3">
                        <span>Sign in</span>
                        <br />
                        <span>My Account</span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <a
                        href="/"
                        className="me-2 d-flex justify-content-center align-items-center"
                      >
                        <i className="fa-solid fa-bag-shopping text-white"></i>
                      </a>
                      <div className="text-white me-4">
                        <span>My Cart</span> <br />
                        <span>$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="header-bottom pb-3 border-top">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid ">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop">
                        SHOP
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        ABOUT
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        CONTACT
                      </NavLink>
                    </li>
                  </ul>
                  <div className="text-white d-none d-lg-flex">
                    <div className="text me-3">
                      <span>Free Shiping For Orders Over $25</span>
                    </div>
                    <span className="text-back">FREE</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

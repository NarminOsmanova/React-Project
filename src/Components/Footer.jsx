import React, { Component } from "react";
import img from "../assets/img/paymet-2.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer container-fluid py-3">
          <footer className="">
            <div className="row m-3">
              <div className="col-12 col-md-4 mb-3">
                <h5 className="mb-4">CONTACT US</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      199 Amsterdam 72, Wall street, Nox 20110 NY
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      (+123) 456 789
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      tikieshopbook@domain.com
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Branch: New York, Paris, France, California, Madrid, Spain
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Open hours: 8.00 – 20.00 Mon – Fri
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <h5 className="mb-4">PRINT RESTORATION</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Bestsellers
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Interviews
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Authors Story
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Book Fairs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Privacy & Terms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <h5 className="mb-4">SOCIAL MEDIA</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Instagram
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Dribbble
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Behance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <h5 className="mb-4">ABOUT US</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Story
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Institute
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="." className="nav-link p-0 text-muted">
                      Gift cards
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-1 mb-3">
                <img src={img} alt="" />
              </div>
            </div>
          </footer>
        </div>
        <footer>
          <div className="m-0">
            <p className="d-flex mb-0 align-items-center justify-content-center bg-dark text-light p-3">
              © {new Date().getFullYear()} TIKIE, MADE BY WPBINGO.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

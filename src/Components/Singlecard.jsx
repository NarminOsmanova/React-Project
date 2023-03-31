import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <p>
        <span>
          <i
            className={
              this.props.value >= 1
                ? "fa-solid fa-star text-warning"
                : this.props.value >= 0.5
                ? "fa-solid fa-star-half-stroke text-warning"
                : "fa-regular fa-star text-warning"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              this.props.value >= 2
                ? "fa-solid fa-star text-warning"
                : this.props.value >= 1.5
                ? "fa-solid fa-star-half-stroke text-warning"
                : "fa-regular fa-star text-warning"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              this.props.value >= 3
                ? "fa-solid fa-star text-warning"
                : this.props.value >= 2.5
                ? "fa-solid fa-star-half-stroke text-warning"
                : "fa-regular fa-star text-warning"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              this.props.value >= 4
                ? "fa-solid fa-star text-warning"
                : this.props.value >= 3.5
                ? "fa-solid fa-star-half-stroke text-warning"
                : "fa-regular fa-star text-warning"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              this.props.value >= 5
                ? "fa-solid fa-star text-warning"
                : this.props.value >= 4.5
                ? "fa-solid fa-star-half-stroke text-warning"
                : "fa-regular fa-star text-warning"
            }
          ></i>
        </span>
      </p>
    );
  }
}

class SingleCard extends Component {
  render() {
    return (
      <>
        <div className="col-12 col-sm-6 col-md-3 singlecard">
          <div className="card position-relative">
            <img
              src={this.props.photo1}
              className="img-fluid card-img-top"
              alt="..."
            />
            <img
              src={this.props.photo2}
              alt=""
              className="img-fluid card-img-bottom"
            />
            <div className="overlay text-end">
              <div className="shop">
                <i className="fa-solid fa-cart-plus"></i>
              </div>
              <div className="shop">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="shop">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              {this.props.desc ? (
                <p className="card-text">
                  <i>
                    <span style={{ color: "#969696" }}></span>by:{" "}
                    {this.props.desc}
                  </i>
                </p>
              ) : (
                ""
              )}
              <div className="d-flex justify-content-between">
                <p className="card-price" style={{ marginTop: "3px" }}>
                  ${this.props.price}
                </p>
                {this.props.decrement ? (
                  <div className="card-decrement">{this.props.decrement}</div>
                ) : (
                  ""
                )}
                {this.props.hot ? <div className="card-new">Hot</div> : ""}
                <Icon value={this.props.rating} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SingleCard;

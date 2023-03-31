import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleCard from '../Components/Singlecard'
import products from '../data'

class Shop extends Component {
    render() {
        return (
            <>
                <div className="cards">
                    <div className="row contact-theme mt-5">
                        <div className='shop-title text-center'>
                            <h1>Shop</h1>
                            <Link className='text-decoration-none text-dark me-2' to="/">Home</Link> 
                            <span><i className="fa-solid fa-angle-right"></i></span>
                            <Link className='text-decoration-none text-dark ms-2' to="/about">Shop</Link>
                        </div><br />
                    </div>
                </div>

                <div className="products-list container">
                   <div className="products-list-inner row g-5 mt-3">
                   {products.map((fd,i)=>{
                    return <SingleCard key={i} photo1={fd.image1} photo2={fd.image2} title={fd.title} 
                    desc={fd.by} price={fd.price} hot={fd.hot} rating={fd.rating} decrement={fd.decrement} new={fd.new}/>
                    })}
                   </div>
                </div>
            </>
        )
    }
}

export default Shop
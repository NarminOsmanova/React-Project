import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import NotFoundPage from '../Pages/NotFoundPage'
import Shop from '../Pages/Shop'

class AppRouter extends Component {
  render() {
    return (
   
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>
            </Routes>
        <Footer/>
        </BrowserRouter>

      )
  }
}

export default AppRouter
import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>
     {/* Header */}
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <ul className="left-info">
              <li><a href="/">Ciaf Holding</a></li> {/*<i className="fa fa-clock-o"></i>*/}
              <li><a href="/"><i className="fa fa-phone"></i>01010602456</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="right-icons">
              <li><a href="/"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a></li>
              {/* <li><a href="/"><i className="fa fa-behance"></i></a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/"><h2>Ciaf Holding</h2></a>
          <button className="navbar-toggler rounded bg-dark" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
              <NavLink to={"AboutUS"} className="nav-link">About Us</NavLink>
              </li>  
              <li className="nav-item">
              <NavLink to={"Services"} className="nav-link">Our Services</NavLink>
              </li>                          
              <li className="nav-item">
              <NavLink to={"ContactUS"} className="nav-link">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    </div>
  )
}

export default Header

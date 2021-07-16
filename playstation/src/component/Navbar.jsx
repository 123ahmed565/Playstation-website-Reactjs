import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../index.css';


//#38c8a8
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg text-center" style={{backgroundColor:"#38c8a8"}}>
            <div className="container-fluid" style={{direction:"rtl"}}>
              <a className="navbar-brand" href="http//www.google.com" style={{color:"black",fontSize:"3rem",fontFamily:"monospace",fontWeight:"bold",marginLeft:"20px",margin:"10px"}} >CHAMPION</a>
              <button className="navbar-toggler" style={{backgroundColor:"white"}}   type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{backgroundColor:"gray"}} ></span>
              </button>
              {/* me-auto mb-2 mb-lg-0  */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav" >
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http//www.google.com" style={{color:"black",fontSize:"1.5rem",fontFamily:"sans-serif",fontWeight:"bold",padding:"15px",marginRight:"20px"}}>الابطال</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http//www.google.com" style={{color:"black",fontSize:"1.5rem",fontFamily:"sans-serif",fontWeight:"bold",padding:"15px",marginRight:"20px"}}>الجوايز</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="http//www.google.com" style={{color:"black",fontSize:"1.5rem",fontFamily:"sans-serif",fontWeight:"bold",padding:"15px",marginRight:"20px"}}>جدول المباريات</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="http//www.google.com" style={{color:"black",fontSize:"1.5rem",fontFamily:"sans-serif",fontWeight:"bold",padding:"15px",marginRight:"20px"}}>الايفنتات</a>
                  </li>
                </ul>
                <form className="col  ax" style={{display:"flex", justifyContent:"flex-end",flexWrap:"wrap"}}>
                <button className="btn" style={{backgroundColor:"black",borderRadius:"20px",padding:"10px 20px 10px",color:"white"}}>Staff only </button> 
                </form>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{borderRadius:"20px",padding:"10px 20px 10px"}}/>
               <button className="btn btn-dark me-2" type="submit" style={{backgroundColor:"black",borderRadius:"20px",padding:"10px 20px 10px"}}>Search</button>
               </form>
              </div>
            </div>
          </nav>
         );
    }
}
 
export default Navbar;
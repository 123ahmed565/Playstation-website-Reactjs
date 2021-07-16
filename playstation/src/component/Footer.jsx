import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{marginTop:"60px"}}>
          <hr/>
          <div className="row">
            <div className="col" style={{fontFamily:"sans-serif",fontSize:"1.6rem"}}>
            <span style={{color: "#38c8a8", fontSize: "3rem",fontFamily:"monospace"}}>CHAMPION</span> <br /> البطوله الاقوى فى مصر
            </div>
            <div className="col-5" style={{fontFamily:"sans-serif",fontSize:"1.6rem"}}>
              <span style={{ color: "#38c8a8", fontSize: "2.5rem",fontFamily:"sans-serif" }}>
                أتصل للاستفسار
              </span>
              <br /> رقم الموبايل
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;

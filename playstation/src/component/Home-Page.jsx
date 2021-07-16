import React, { Component } from "react";
import logo from "../logo.svg";
import logo2 from "../logo v2.png";
import "../index.css";

class Home_Page extends Component {
    state = {};
    render() {
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row" style={{ direction: "rtl" }}>
                    <div className=" col animation"
                        style={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "3rem",
                        }}
                    >
                        البطوله الاولى لو حريف تعالى أكسب
                    </div>
                    <div className="animation2"
                        style={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "2.5rem",
                            marginTop: "100px",
                        }}
                    >
                        البطوله الاقوى فى مصر
                        <br />
                        <span style={{ color: "#38c8a8", fontSize: "2.5rem" }}>

                            العب واكسب
                        </span>
                    </div>
                    <div>
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "#393636",
                                padding: "10px 30px 10px",
                                borderRadius: "30px",
                                color: "white",
                                fontSize: "1rem",
                            }}
                        >
                            تفاصيل المسابقه
                        </button>
                    </div>
                    <div
                        className=" col d-none d-md-block logo"
                        style={{ direction: "ltr", marginTop: "-300px" }}
                    >
                        <img
                            src={logo2}
                            alt="Logo"
                            style={{ width: "400px", height: "300px" }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home_Page;

// <div className="container" style={{marginTop:"100px"}}>
// <div className="row" style={{direction:"rtl"}}>
//     <div className=" col" style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"3rem"}} >البطوله الاولى لو حريف تعالى أكسب</div>
//     <div className=" col d-none d-md-block logo" style={{direction:"ltr"}}><img src={logo} alt="Logo" style={{width:"400px",height:"300px"}}/></div>
// </div>
// {/* <div className="row" style={{direction:"ltr"}}>
//     <div className=" col d-none d-md-block logo" style={{direction:"ltr"}}><img src={logo} alt="Logo" style={{width:"400px",height:"200px"}}/></div>
// </div> */}
// <div className="row mt-5" style={{direction:"rtl"}}>
// <div className="col" style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"2.1rem"}}>البطوله الاقوى فى مصر
// <br/> <span style={{color:"#38c8a8"}}> العب واكسب</span> </div>
// </div>
// <div className="row mt-3 " style={{direction:"rtl"}}>
//     <div><button className="btn" style={{backgroundColor:"#393636",padding:"10px 30px 10px",borderRadius:"30px" ,color:"white"}}>تفاصيل المسابقه</button></div>
// </div>
// </div>

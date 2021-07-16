import React, { Component } from "react";
class Award extends Component {

    sayHello(){
        alert('رقم الحجز :0115574739');
    }
  state = {};
  render() {
    return (
<React.Fragment>
<div className="text-center" style={{marginTop: "100px",marginBottom:"40px"}}>
   <h1 style={{fontFamily:"sans-serif",fontSize:"3.5rem"}}>جوائز المسابقة</h1>
   <h5  style={{marginTop:"40px",fontFamily:"sans-serif",fontSize:"2rem"}}> لو حريف <span style={{color:"#38c8a8",fontSize:"2rem"}}> العب واكسب</span></h5>
</div>


<div class="card-group">
<div class="card text-center" style={{backgroundColor:"#38c8a8",marginLeft:"50px",marginRight:"50px"}}>
<div class="card-body" >
<h5 class="card-title text-center" style={{fontFamily:"sans-serif",fontSize:"2rem"}}>الجائزة التالتة</h5>
<p class="card-text mt-5" style={{fontFamily:"sans-serif",fontSize:"2rem"}}>5000LE</p>
</div>
</div>
<div class="card  text-center" style={{backgroundColor:"#38c8a8",marginLeft:"50px",marginRight:"50px"}}>
{/* <img src="..." class="card-img-top" alt="..."/> */}
<div class="card-body">
<h5 class="card-title text-center"style={{fontFamily:"sans-serif",fontSize:"2rem"}}>الجائزة الثانية</h5>
<p class="card-text mt-5" style={{fontFamily:"sans-serif",fontSize:"2rem"}}>7000LE</p>
</div>
</div>
<div class="card  text-center" style={{backgroundColor:"#38c8a8",marginLeft:"50px",marginRight:"50px"}}>
{/* <img src="..." class="card-img-top" alt="..."/> */}
<div class="card-body">
<h5 class="card-title text-center"style={{fontFamily:"sans-serif",fontSize:"2rem"}}>الجائزة الأولى</h5>
<p class="card-text mt-5" style={{fontFamily:"sans-serif",fontSize:"2rem"}}>10000LE</p>
</div>
</div>
</div>

<div className="container text-center" >
   <h2 style={{marginTop:"50px"}}>قيمة الاشتراك 35 جنيه</h2>
   <button  onClick={this.sayHello} className="btn btn-outline-dark" style={{marginTop:"35px"}}>إشترك الآن</button>
</div>
</React.Fragment>
     
    );
  }
}

export default Award;






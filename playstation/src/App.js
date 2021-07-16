import "./App.css";
import React from "react";
import { Route ,Switch} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home_Page from "./component/Home-Page";
import Award from "./component/Award";
import Testiomnials from "./component/Testimonials";
import Footer from "./component/Footer";
import CountTimer from "./component/Count-timer";
import Staff_only from "./component/staff-only";




export default class App extends React.Component {
  state = [];

  render() {
    return (
      <React.Fragment>
         <Route path='/staff-only'  component={Staff_only}/> 
        <Navbar />
        <Home_Page/>
        <CountTimer/>
        <Award/>
        <Testiomnials/>
        <Footer/>
      </React.Fragment>
    );
  }
}

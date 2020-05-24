import React, { Component } from 'react';
// import { Link, BrowserRouter as Router, Switch, Redirect, Route, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import indiaMap from '../../india.svg';
import './home.css';
// import { white } from 'color-name';
import Choropleth from "../map/choropleth"


// export default class home extends Component {
//   render() {
//     return (
//       <div  className="home">
//         <p >Home</p>
//       </div>
//     )
//   }
// }


// constructor(props) {
//   super(props)

//   this.state = {

//   }
// }


export default class home extends Component {
  // static propTypes = {
  //   prop: PropTypes

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     covid19: []
  //   }
  // }

  // indiaCovid19()
  // componentDidMount() {
  //   return "Don't call";
  //   axios.get(`https://api.covid19india.org/data.json`)
  //     .then(response => {
  //       console.log("Res", response.data.tested);
  //       const covid19 = response.data.tested;
  //       this.setState({ covid19 });
  //     })
  // }

  render() {

    return (
      <div className="home">
        <h1 style={{ color: "yellow" }}>Notice :</h1>
        <p style={{ color: "red", fontSize: "40px" }}>* This page is under developemet, please! visit covid updates for result.</p>
        <Choropleth />
        {/* <img src={indiaMap} className="mapIndia" style={{ "background-color": "#ffeb3b" }} alt="indiaMap" /> */}

        {/* <svg src={indiaMap}  width="200" height="200" xmlns="http://www.w3.org/2000/svg"></svg> */}
      </div>

      // <ul>
      //   {
      //     // this.state.covid19.map(covid => <li>{covid.individualstestedperconfirmedcase}</li>)
      //   }
      // </ul>

    )

  }
}

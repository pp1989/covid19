import React, { Component } from 'react';
// import { Link, BrowserRouter as Router, Switch, Redirect, Route, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import PropTypes from 'prop-types';
import './home.css';


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

  constructor(props) {
    super(props)

    this.state = {
      covid19: []
    }
  }

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
     
      <ul>
        {
          this.state.covid19.map(covid => <li>{covid.individualstestedperconfirmedcase}</li>)
        }
      </ul>

    )

  }
}

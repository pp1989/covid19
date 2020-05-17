import React, { Component } from 'react'
import axios from 'axios';
import { createBrotliCompress } from 'zlib';
import { captureRejectionSymbol } from 'events';
import Table from "../Table";
import './covidUpdates.css';

export default class covidUpdates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      covidData: []
    }

  }

  componentDidMount = () => {
    let res = [];
    
    axios.get(`https://api.covid19india.org/raw_data4.json`)
    // axios.get(`https://api.covid19india.org/raw_data3.json`)
      .then(response => {
        //  const sorted=response.data.raw_data.sort((a, b) => a - b).reverse();
        this.setState({ 'covidData': response.data.raw_data });

      })
  }

  render() {
    return (
      <div className="covideForm">
        <div className="covidUpdate">
          <h2 style={{ color: "goldenrod", }}> List Of Covide19 patients in States and its District | Live*</h2>
          <Table className="table table-fineprint fadeInUp " style={{ animationDelay: '1.5s', border: `1px solid golden` }} covidData={this.state.covidData} />
        </div>
      </div>
    )
  }
}

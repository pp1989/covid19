import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { createBrotliCompress } from 'zlib';
import { captureRejectionSymbol } from 'events';
// import TD from '../dataTable.json';
import { CloseButton } from 'react-bootstrap';
import { goldenrod, pink } from 'color-name';
const columnHeader = ["EntryId", "StateCode", "DetectedState", "DetectedDistrict", "DateAnnounced"];

export default class covidUpdates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      covidData:null
    }
    //   console.log("THIS",this)
    this.generateHeader = this.generateHeader.bind(this);
    this.generateTableData = this.generateTableData.bind(this);
  }

  // static propTypes = {
  //   prop: PropTypes
  // }
  generateHeader() {
    let res = [];
    // console.log("columnHeader.length",columnHeader.length);
    for (var i = 0; i < columnHeader.length; i++) {
      // console.log("IIIIII",i)
      res.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
    }
    // console.log("ASKE",res.props)
    // console.log("RERER",res);
    return res
  }
  generateTableData = () => {
    let res = [];
    let tableData;

    axios.get(`https://api.covid19india.org/raw_data3.json`)
      .then(response => {

        this.setState({covidData:response.data.raw_data});


        // response})
        // return response.data;
        // console.log("data",response.data.raw_data);
        //  this.setState({tableD:data})
        // return response.data;
        // return new Map(response.data.raw_data.map(ele => [ele.detectedstate,ele.statecode,ele.statuschangedate]));
        // console.log("response.data.raw_data",response.data.raw_data)
        // tableData=response.data.raw_data.map((ele)=>{
        //  return ele.object;
        // console.log("ELEL",ele);
        // return ele.detectedstate,ele.statecode,ele.statuschangedate;
        // console.info(ele)
        // return ele;
        // });
        // const tableData = response.data.raw_data;
        // console.log("tableDataXYZ>>>",tableData)
        // this.setState({ tableData });
        // console.log("State>>>>",this.state.tableData)
        // .............................
        // let tableData = covid19.data;
        // console.log("tableData.lengthtttt",tableData[0]);
        // console.log("tableData.lengthtttt",response.data.raw_data);
        // console.log("gtgtgtt", this.state.covidData[0].currentstatus)
        // tableData = response.data.raw_data;
        //  console.log(TD);
        // for (var i = 0; i <  tableData.length; i++) {
          if(this.state.covidData.length>0){
            this.state.covidData.map((tElement, i) => {
          console.log("gtgtgtt", this.state.covidData[i].currentstatus)
          // console.log("tableddd", i, "ele", tElement);
          // console.log("count",tableData[i].entryid, tableData[i].statecode, tableData[i].detectedstate,tableData[i].detecteddistrict,tableData[i].dateannounced);
          // console.log(" <{tableData[i]",tableData[i].statecode,tableData[i].entryid);
          res.push(
            <tr key={i} >
              <td key={this.state.covidData[i].currentstatus}>{this.state.covidData[i].currentstatus}</td>
              {/* <td key={tElement.statecode}>{tElement.statecode}</td>
              <td key={tElement.detectedstate}>{tElement.detectedstate}</td>
              <td key={tElement.detecteddistrict}>{tElement.detecteddistrict}</td>
              <td key={tElement.dateannounced}>{tElement.dateannounced}</td> */}
              {/* <td>21</td>
          <td>21</td>
          <td>21</td> */}
            </tr>
          )

        })
      }
        // res.forEach((e)=>{
        //   console.log("ewew",e);
        // });
        // console.log("REMOOO",res);
      }).catch((error) => {
        console.log("Error", error);
      })
    return res;
    // })
    // console.log("REMOOO",res[0])

    // return res;
  }
  // this.generateHeader()
  render() {
    return (
      <div>
        <h2 style={{ color: "goldenrod", font: "italic" }}> List Of Covide19 patients in States and its District | Live*</h2>
        <table className="table  table-hover table-fineprint fadeInUp"
          style={{ animationDelay: '1.5s' }}>
          <thead>
            <tr style={{ color: "pink" }}>
              {/* componentDidMount() */}
              {this.generateHeader()}
            </tr>
          </thead>
          <tbody style={{ color: "goldenrod" }}>
            {/* componentDidMount() */}
            {/* e.preventDefault(); */}
            {this.generateTableData()
            }
          </tbody>
        </table>
        {/* <td key={tableData.entryid}>{tableData.entryid}</td> */}

      </div>
    )
  }
}

import './globalPatients.css';
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import axios from 'axios'; 
// import { createBrotliCompress } from 'zlib';
// import { captureRejectionSymbol } from 'events';
import TD from '../dataTable.json';
// import { CloseButton } from 'react-bootstrap';
// import { goldenrod, pink } from 'color-name';
const columnHeader = ["EntryId", "StateCode", "DetectedState", "DetectedDistrict", "DateAnnounced"];

export default class globalPatients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
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
  generateTableData() {
    let res = [];
    let tableData;
    
    // console.info("d")
    
    //  axios.get(`https://api.covid19india.org/raw_data3.json`)
    // .then(response => {
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
    // console.log("tableData.lengthtttt",tableData);
      tableData = TD.raw_data;
      //  console.log(TD);
    for (var i = 0; i <  tableData.length; i++) {
      // console.log("count",tableData[i].entryid, tableData[i].statecode, tableData[i].detectedstate,tableData[i].detecteddistrict,tableData[i].dateannounced);
      // console.log(" <{tableData[i]",tableData[i].statecode,tableData[i].entryid);
       res.push(
        <tr key={i} >
          <td key={tableData[i].entryid}>{tableData[i].entryid}</td>
          <td key={tableData[i].statecode}>{tableData[i].statecode}</td>
          <td key={tableData[i].detectedstate}>{tableData[i].detectedstate}</td>
          <td key={tableData[i].detecteddistrict}>{tableData[i].detecteddistrict}</td>
          <td key={tableData[i].dateannounced}>{tableData[i].dateannounced}</td>
          {/* <td>21</td>
          <td>21</td>
          <td>21</td> */}
        </tr>
      )
      
    }
    // res.forEach((e)=>{
    //   console.log("ewew",e);
    // });
    // console.log("REMOOO",res);
    return res;
  // })
  // console.log("REMOOO",res[0])
  
    // return res;
  }
  // this.generateHeader()
  render() {
    return (
      <div>
        <h2 style ={{color:"goldenrod", font:"italic"}}> List Of Covide19 patients in States and its District | Live*</h2>
        <table className="table  table-hover table-fineprint fadeInUp"
          style={{animationDelay: '1.5s'}}>
          <thead>
            <tr style={{color:"pink"}}>
           {/* componentDidMount() */}
           {this.generateHeader()}
            </tr>
          </thead>
          <tbody style={{color:"goldenrod"}}>
          {/* componentDidMount() */}
          {/* e.preventDefault(); */}
          { this.generateTableData()
          }
          </tbody>
        </table>
          {/* <td key={tableData.entryid}>{tableData.entryid}</td> */}
          
      </div>
    )
  }
}


import React from 'react';

    const Table = ({ covidData }) => {

    return (
      <table className="table" style={{ padding: `3cm 3cm 3cm 3cm`, margin:'1px'}} >
        <thead>
          <tr style={{ color: "pink" , border: `10px solid golden` }}>

            <th>EntryId</th>
            <th>StateCode</th>
            <th>DetectedState</th>
            <th>DetectedDistrict</th>
            <th>DateAnnounced</th>

          </tr>
        </thead>
        <tbody style={{ color: "goldenrod" }}>
          { (covidData.length > 0) ? covidData.map( (covid, index) => {
             return (
                 <tr key={ index }>
                <td>{covid.entryid }</td>
                <td>{ covid.statecode }</td>
                <td>{ covid.detectedstate}</td>
                <td>{ covid.detecteddistrict }</td>
                <td>{ covid.dateannounced }</td>
                {/* <td>{ covid.disk }</td> */}
{/* 
                <td key={covid.currentstatus}>{covid.currentstatus}</td>
               <td key={covid.statecode}>{covid.statecode}</td>
               <td key={covid.detectedstate}>{covid.detectedstate}</td>      
             <td key={covid.detecteddistrict}>{covid.detecteddistrict}</td>
               <td key={covid.dateannounced}>{covid.dateannounced}</td> */}
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    )
  }
  export default Table;


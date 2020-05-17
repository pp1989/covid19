import React, { Component } from 'react';

import { Navbar, Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router, Switch, Redirect, Route, NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../image/logo9.png';
import Lockdown from '../Lockdown/lockdown';
import Home from '../Home/home';
import GlobalPatients from '../GlobalP/globalPatients';
import Covid from '../covidUpdates/covidUpdates';


export default class header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
    }

    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     })
    // }
    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to='/covidupdate' />
    //     }
    // }
    render() {
        return (
            <Router>
                
                <div className="headerUp">
                    <nav className="navbar navbar-default  navbar-fixed-top navbar-inverse navbar-light navbar-static-top">
                        <ul className="nav nav-pills ">
                            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/lockdown" className="active">Lockdown</NavLink></li>
                            <li><NavLink to="/globalpatients" className="active">Global Patients</NavLink></li>
                            <li><NavLink to="/covidupdate" className="active">COVID Updates</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="site-header"></div>
                {/* </div> */}
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/lockdown" component={Lockdown}></Route>
                        <Route path="/globalPatients" component={GlobalPatients}></Route>
                       <Route path="/covidupdate" component={Covid}></Route>
                       {/* <Route path="/covidupdate" render={()=>(<Redirect to="/lockdown"/>)}></Route> */}
                    </Switch>
                </div>
                
            </Router>

        )

    }
}

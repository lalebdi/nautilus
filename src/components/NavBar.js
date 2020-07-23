import React, { Component } from 'react'
import logo from '../assets/nautilus-logo-sprite@2x.png';

export default class NavBar extends Component {
    render() {
        return (
            <div className="big-wrapper">
                <div className="left-side">
                <img src={logo} alt="logo" className="logo" />
                </div>
                
                <div className="right-side">
                    <div className="nav-buttons"><h6> ISSUES </h6></div>
                    <div className="nav-buttons"><h6> TOPICS </h6></div>
                    <div className="nav-buttons"><h6> BLOG </h6></div>
                    <div className="nav-buttons"><h6> NEWSLETTER </h6></div>
                    <div className="nav-buttons"><h6> SOCIAL MEDIA </h6></div>
                    <div className="nav-buttons"><h6> LOGIN </h6></div>
                    <div className="sub-box"><h6> SUBSCRIBE </h6></div>
                </div>
                
            </div>
        )
    }
}

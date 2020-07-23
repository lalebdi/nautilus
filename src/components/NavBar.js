import React, { Component } from 'react'
import logo from '../assets/nautilus-logo-sprite@2x.png';

export default class NavBar extends Component {
    render() {
        return (
            <div className="big-wrapper">
                <div className="left-side"></div>
                <img src={logo} alt="logo" className="logo" />
                <div className="right-side"></div>
            </div>
        )
    }
}

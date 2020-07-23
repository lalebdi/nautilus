import React, { Component } from 'react'
import Background from '../assets/assets/matches.png'

export default class AboveNavBar extends Component {
    render() {
        return (
            <div>
                <div className='above-navBar'>
                    <img src={Background} alt="matches" className="matches"/>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import ArticleBackground from '../assets/assets/clover_card.jpg'

export default class BelowNavBar extends Component {
    render() {
        return (
            <div>
                <div className="below-navbar">
                <img src={ArticleBackground} alt="matches" className="matches"/>
                </div>
            </div>
        )
    }
}

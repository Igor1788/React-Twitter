import React, { Component } from 'react'
import './navMenu.css'

class NavMenu extends Component{
    render(){
        return (
            <nav className="navMenu">
                    <ul className="navMenu__lista">
                        <li className="navMenu__item">
                            <a className="navMenu__link">
                                {this.props.topo} <br />
                                <strong>{this.props.usuario }</strong>
                            </a>
                        </li>
                        <li className="navMenu__item">
                            <a className="navMenu__link" href="/">Página Inicial</a>
                        </li>
                        <li className="navMenu__item">
                            <a className="navMenu__link">Hashtag</a>
                        </li>
                        <li className="navMenu__item">
                            <a className="navMenu__link">Logout</a>
                        </li>
                    </ul>
                </nav>
        )
    }
}
export default NavMenu
import React, { Component } from 'react'
import './cabecalho.css'
import './navMenu.css'
import {Link} from 'react-router-dom'

class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <Link to="/">Twitelum </Link>
                    </h1>
                <nav className="navMenu">
                    <ul className="navMenu__lista">
                        <li className="navMenu__item">
                            <Link to ="/" className="navMenu__link">
                                Bem vindo(a): <br />
                                <strong>{ this.props.usuario }</strong>
                            
                        </Link></li>
                        <li className="navMenu__item">
                        <Link to ="/" className="navMenu__link" href="">Página Inicial</Link>
                        </li>
                        <li className="navMenu__item">
                        <Link to ="/" className="navMenu__link">Hashtags</Link>
                        </li>
                        <li className="navMenu__item">
                        <Link to ="/" className="navMenu__link">Logout</Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
        )
    }
}

export default Cabecalho
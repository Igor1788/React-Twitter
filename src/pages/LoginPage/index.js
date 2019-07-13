import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {
    fazerLogin = event =>{
        event.preventDefault();
        const dadosDoUsuario ={
            login: this.refs.inputLogin.value,
            senha: this.refs.inputSenha.value
           }
           fetch('http://twitelum-api.herokuapp.com/login', 
           {method: 'POST', 
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(dadosDoUsuario)})
    
    .then( res => {
        if(!res.ok) throw Error(res.status);
        return res.json();
    })
    .then(resObj => {
        const Token = resObj.token;
        localStorage.setItem('token',Token);
        this.props.history.push("/");
        console.log(Token);
    })
    .catch(err =>{
        console.log(`Meu erro foi ${err.message}`);
    })}
    render() {
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form onSubmit={this.fazerLogin} className="loginPage__form" action="/">
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input ref ="inputLogin" className="loginPage__input" type="text" id="login" name="login"/>
                                
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input ref ="inputSenha" className="loginPage__input" type="password" id="senha" name="senha"/>
                                </div>
                                {/* <div className="loginPage__errorBox">
                                    Mensagem de erro!
                                </div> */}
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>    
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage
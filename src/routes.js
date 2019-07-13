import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

// Páginas
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import NotFound from './components/Notfound'

class PrivateRoute extends Component {
    estaAutenticado = () => {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        console.log(this.props)
        const { component: Component, ...props } = this.props;
        if (this.estaAutenticado()) {
            return <Component {...props} />
        } else {
            return <Redirect to="/login" />
        }
    }


}

const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute path="/" component={Home} exact />
            <Route path="/login" component={LoginPage} />
            <Route component={NotFound} />
        </Switch>
    )
}
export default Roteamento
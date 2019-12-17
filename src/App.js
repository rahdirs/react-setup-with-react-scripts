import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './pages/home';


export default class App extends Component {
    displayName = App.name
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path="/" component={withRouter(Home)} />
            </Switch>
        );
    }
}
            
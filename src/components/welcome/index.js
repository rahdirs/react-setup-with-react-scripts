import React, { Component } from 'react';
import './styles.css';

export default class Welcome extends Component {
    displayName = Welcome.name;

    constructor(props) {
        super(props);

        this.state = {
            displayName: 'User'
        };
    }

    render() {

        return (
            <div className="welcomeWidget">
                <p>Hello World!!</p>
            </div>
        );
    }
}
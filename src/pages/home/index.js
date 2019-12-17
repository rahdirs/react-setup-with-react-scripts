import React, { Component } from 'react';
import './styles.css';
import Welcome from './../../components/welcome';

export default class Home extends Component {
  displayName = Home.name
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Welcome/>
    );
  }
}

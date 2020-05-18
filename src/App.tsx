import React, { Component } from 'react';

import { Cubes } from './Framework/Cubes';
import { Triangles } from './Framework/Triangles';



export default class App extends Component {

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Cubes />
        <Triangles />
      </div>
    )
  }
}













import React, { Component } from 'react';
// import './App.css';

import Sketch from "react-p5";
import { Population } from './D_Population';
import p5 from "p5";

export default class App extends Component {
  triangle: Array<p5.Vector> = [];
  // pop: Population = new Population(triangle);
  // PVector [] triangle=new Vector[3];
  

  setup = (p: any, canvasParentRef: any) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  draw = (p: any) => {
    p.background(210);
    p.noStroke();
    p.fill(0);

    for (let i = 0; i < this.triangle.length; i++) {
      p.ellipse(this.triangle[i].x, this.triangle[i].y, 10, 10);
    }

    p.stroke(255, 0, 0);
    p.noFill();

    for (let i = 0; i < this.pop.m_pop.length; i++) {
      p.push();
      if (i === this.pop.m_pop.length - 1) p.stroke(255, 0, 0);
      else p.stroke(120, 120, 120);
      this.pop.m_pop[i].draw(p);
      p.pop();
    }
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}













// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

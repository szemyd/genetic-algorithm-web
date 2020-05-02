import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Sketch from "react-p5";

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

 
export default class App extends Component {
  x = 50;
  y = 50;
 
  setup = (p:any, canvasParentRef:any) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p:any) => {
    p.background(0);
    p.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
  };
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
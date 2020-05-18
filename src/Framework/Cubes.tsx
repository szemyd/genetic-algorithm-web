import React, { Component } from 'react';
import Sketch from "react-p5";


import { util } from '../Params/util';
import { Population } from '../Engine2/Population';

// import { inconsolata } from './Assets/InconsolataCondensed.ttf'

let myFont: any;


interface MyProps {

}

interface MyState {
  running: boolean,
  showAll: boolean,
  pop: Population,
  bestFitness: number,
  itSpeed: number
}


export class Cubes extends Component<MyProps, MyState> {

  myFont: any = 0;

  constructor(props: any) {
    super(props);
    this.state = { running: false, showAll: false, pop: new Population(), bestFitness: 0, itSpeed: 1 }
  }

  setup = (p: any, canvasParentRef: any) => {
    p.createCanvas(util.canvasWidth, util.canvasHeight, p.WEBGL).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    // p.textFont(myFont)
    this.resetSketch();
  };

  draw = (p: any) => {
    const { showAll, pop, itSpeed } = this.state;

    if (p.frameCount % itSpeed === 0) {
      pop.evolve();
      // console.log(this.pop.m_pop[this.pop.m_pop.length - 1].m_fitness)
    }

    p.background(205);
    p.noStroke();
    p.fill(255);
    p.lights();

    if (showAll) {
      for (let i = 0; i < pop.m_pop.length; i++) {
        p.push();
        p.translate(-p.width / 2, -p.height / 2, 0);
        p.scale(0.1, 0.1, 0.1);
        p.translate(p.width * (i % 10), p.height * (i / 10), 0);
        p.rotateY(0.01 * p.frameCount);
        pop.m_pop[i].draw(p);
        p.pop();
      }
    }
    else {
      p.push();
      p.rotateY(0.01 * p.frameCount);
      pop.m_pop[pop.m_pop.length - 1].draw(p);
      p.pop();
    }
    this.setState({ bestFitness: pop.m_pop[pop.m_pop.length - 1].m_fitness });
  };

  resetSketch() {
    this.setState({ pop: new Population() });
  }

  preload(p: any) {
    // myFont = p.loadFont('./Assets/InconsolataCondensed');
  }

  render() {
    const { running, showAll, bestFitness, itSpeed } = this.state;

    return <div>
      <Sketch setup={this.setup} draw={running ? this.draw : () => ({})} preload={this.preload} />
      <button onClick={() => this.setState({ running: !running })}>{running ? 'Pause' : 'Run'}</button>
      <button onClick={() => this.setState({ showAll: !showAll })}>{showAll ? 'Single' : 'All'}</button>
      <button onClick={() => this.resetSketch()}>Preset</button>
      <input type='range' min='1' max='10' step='1' value={itSpeed} onChange={(e) => this.setState({ itSpeed: parseInt(e.target.value) })} />
      <div> {bestFitness}</div>
    </div >
  }
}













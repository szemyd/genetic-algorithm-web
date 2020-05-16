import React, { Component } from 'react';
import Sketch from "react-p5";


import { util } from './Params/util';
import { Population } from './Engine2/Population';

// import { inconsolata } from './Assets/InconsolataCondensed.ttf'

let myFont:any;

export default class App extends Component {

  pop!: Population;
  myFont: any=0;

  setup = (p: any, canvasParentRef: any) => {
    p.createCanvas(util.canvasWidth, util.canvasHeight, p.WEBGL).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    // p.textFont(myFont)
    this.pop = new Population();

  };

  draw = (p: any) => {
    if (p.frameCount % 1 === 0) {
      this.pop.evolve();
      // console.log(this.pop.m_pop[this.pop.m_pop.length - 1].m_fitness)
    }

    p.background(204);
    p.noStroke();
    p.fill(255);
    p.lights();

    // this.pop.m_pop.reverse(); // optional: to display the fitesst top left.
    for (let i = 0; i < this.pop.m_pop.length; i++) {
      p.push();
      p.scale(0.1, 0.1, 0.1);
      p.translate(p.width * (i % 10), p.height * (i / 10));
      p.translate(-p.width * 4, -p.height * 4, 0);
      p.rotateY(0.01 * p.frameCount);
      this.pop.m_pop[i].draw(p);
      p.pop();
    }
    // this.pop.m_pop.reverse();
  };

  preload(p: any) {
    // myFont = p.loadFont('./Assets/InconsolataCondensed');
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} preload={this.preload} />;
  }
}













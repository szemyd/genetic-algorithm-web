import React, { Component } from 'react';
import Sketch from "react-p5";


import { util } from './Params/util';
import { Population } from './Engine2/Population';


export default class App extends Component {

  pop!: Population;

  setup = (p: any, canvasParentRef: any) => {
    // p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p.createCanvas(util.canvasWidth, util.canvasHeight, p.WEBGL).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

    this.pop = new Population();

  };

  draw = (p: any) => {
    if (p.frameCount % 10 === 0) {
      this.pop.evolve();
      console.log(this.pop.m_pop[this.pop.m_pop.length-1].m_fitness)
    }

    p.background(204);
    p.noStroke();
    p.fill(255);
    p.lights();

    for (let i = 0; i < this.pop.m_pop.length; i++) {
      p.push();
      p.scale(0.1, 0.1, 0.1);
      p.translate(p.width * (i % 10), p.height * (i / 10));
      p.translate(-p.width * 4, -p.height * 4, 0);
      p.rotateY(0.01 * p.frameCount);
      this.pop.m_pop[i].draw(p);
      p.pop();
    }

    
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}













import { Genotype } from './Geno';
import { util } from '../Params/util';

export class Phenotype {

    m_width: number;
    m_height: number;
    m_depth: number;

    constructor(g: Genotype) {
        this.m_width = g.m_genes[0] * util.canvasWidth / 256;
        this.m_height = g.m_genes[1] * util.canvasHeight / 256;
        this.m_depth = g.m_genes[2] * util.canvasHeight / 256;
    }

    draw(p: any) {
        p.box(this.m_width, this.m_height, this.m_depth)

    }

    evaluate() {
        let fitness: number = 0.0;
        fitness += Math.pow((this.m_width + this.m_height + this.m_depth), 2);
        fitness -= this.m_width * this.m_height * this.m_depth;
        return fitness;
    }
}
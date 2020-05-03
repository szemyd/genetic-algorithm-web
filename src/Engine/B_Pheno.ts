import { Genotype } from './A_Geno';
import p5 from 'p5';

export class Phenotype {
    // Encode the formal manifestation of the genotype. The translation into the physical world
    // We don´t assign values yet. They will be inherited from the Genotype
    location: p5.Vector = new p5.Vector();
    m_diameter: number = 0.0;

    // Do the translation grom geno to pheno extracting values from the genotype (argument in the constructor)
    constructor(g: Genotype) {
        // Map the values: divide by its maximum value (256) obtaining a percentage and multiply by the maximum desired (screen dimensions in this case)
        // this.m_width = g.m_genes[0] * (window.screen.width) / 256;
        // this.m_height = g.m_genes[1] * (window.screen.height) / 256;
        // this.m_depth = g.m_genes[2] * (window.screen.height) / 256;

        this.m_diameter = g.m_genes[0] * (window.screen.width) / 256;
        this.location.x = g.m_genes[1] * (window.screen.width) / 256;
        this.location.y = g.m_genes[2] * (window.screen.height) / 256;
    }

    draw(p: any) {
        // p.box(this.m_width, this.m_height, this.m_depth);
        p.ellipse(this.location.x, this.location.y, this.m_diameter, this.m_diameter);
    }

    // Evaluate fitness
    // evaluate2() {
    //     let fitness: number = 0.0;
    //     // Weight customly the fitness. By squaring one of the values we are giving it more importance 
    //     fitness += Math.pow((this.m_width + this.m_height + this.m_depth), 2);
    //     // We want the minimum volume
    //     fitness -= this.m_width * this.m_height * this.m_depth;
    //     return fitness;
    // }

    evaluate() {
        let fitness: number = 0.0;

        fitness -= Math.pow((p5.Vector.dist(this.location, globalThis.triangle.x)
            + p5.Vector.dist(this.location, globalThis.triangle.y)
            + p5.Vector.dist(this.location, globalThis.triangle.z)
            - (this.m_diameter / 2 * 3)), 2); // The squaring of the numbers are just for 'magnifing purpuses, it doesn't actually represent the property of the box like it's surface.
        //fitness -=    m_width *m_height *m_depth;

        return fitness;
    }
}
import { Genotype } from './A_Geno';
import { Phenotype } from './B_Pheno';
import p5 from 'p5';

export class Individual {
    // Wrap all the properties in the individual
    m_fitness: number; // Property of the individual, initialize it in the constructor.
    m_genotype: Genotype;
    m_phenotype: Phenotype;

    constructor() {
        // Initialize Geno and Phenotype 
        this.m_genotype = new Genotype();
        this.m_phenotype = new Phenotype(this.m_genotype);
        this.m_fitness = 0.0; // We will override this in our draw function. Instantiate it, smetimes can be problematic if its not.
    }

    draw(p: any) {
        this.m_phenotype.draw(p);
    }

    evaluate(triangle: p5.Vector) {
        this.m_fitness = this.m_phenotype.evaluate(triangle);
    }

    // The return type is elegible from us. The input is given by the interface
    // We want to use a sorting methd form java to sort our values, and we NEED ad
    // compareTo(obj: object) {
    //     // It will take an object Individual as input
    //     let b:Individual = obj; // Cast it
    //     if (this.m_fitness > b.m_fitness) return 1;
    //     else if (this.m_fitness < b.m_fitness) return -1;
    //     return 0; // we dont need 'else' because return breaks the fucntion, so if the previous ones didnt return it will pick the last one

    // }
}
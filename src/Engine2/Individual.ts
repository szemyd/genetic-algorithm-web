import { Phenotype } from "./Pheno";
import { Genotype, crossover } from "./Geno";

export class Individual {

    m_genotype: Genotype;
    m_phenotype: Phenotype;
    m_fitness: number;

    constructor() {
        this.m_genotype = new Genotype();
        this.m_phenotype = new Phenotype(this.m_genotype);
        this.m_fitness = 0.0;
    }

    draw(p: any) {
        this.m_phenotype.draw(p);
    }

    evaluate() {
        this.m_fitness = this.m_phenotype.evaluate();
    }



}

export function breed(a: Individual, b: Individual) {
    let c: Individual = new Individual();
    c.m_genotype = crossover(a.m_genotype, b.m_genotype);
    c.m_genotype.mutate();
    c.m_phenotype = new Phenotype(c.m_genotype);

    return c;
}

export function compareTo(a: Individual, b: Individual) {
    if (a.m_fitness > b.m_fitness) {
        return 1;
    }
    else if (a.m_fitness < b.m_fitness) {
        return -1;
    }
    return 0;
}
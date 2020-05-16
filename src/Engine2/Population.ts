import { Individual, breed, compareTo } from "./Individual";

export class Population {

    m_pop: Array<Individual>;

    constructor() {
        this.m_pop = new Array<Individual>(100);
        for (let i = 0; i < this.m_pop.length; i++) {
            this.m_pop[i] = new Individual();
            this.m_pop[i].evaluate();
        }

        this.m_pop.sort(compareTo);
    }


    evolve() {
        let a: Individual = this.select();
        let b: Individual = this.select();

        let x: Individual = breed(a, b);
        this.m_pop[0] = x;
        x.evaluate();
        this.m_pop.sort(compareTo)
    }

    select() {
        let which: number =
            Math.floor((100.0 - 1e-6) * (1.0 - Math.pow(Math.random(), 2)));
        return this.m_pop[which];
    }


}
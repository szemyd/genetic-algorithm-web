export class Genotype {

    m_genes: Array<number> = [];

    constructor() {
        this.m_genes = new Array<number>(3);

        for (let i = 0; i < this.m_genes.length; i++) {
            this.m_genes[i] = Math.floor(Math.random() * 256)
        }
    }

    mutate() {
        // 5% mutation rate
        for (let i = 0; i < this.m_genes.length; i++) {
            if (Math.random() * 100 < 5) {
                this.m_genes[i] = Math.random() * 256;
            }
        }
    }
}


export function crossover(a: Genotype, b: Genotype) {
    let c: Genotype = new Genotype();
    for (let i = 0; i < c.m_genes.length; i++) {
        if (Math.random() < 0.5) {
            c.m_genes[i] = a.m_genes[i];
        }
        else {
            c.m_genes[i] = b.m_genes[i];
        }
    }
    return c;
}







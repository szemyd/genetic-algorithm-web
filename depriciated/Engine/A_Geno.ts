export class Genotype {

    m_genes: Array<number> = [];

    constructor() {
        this.m_genes = new Array<number>(3);

        for (let i = 0; i < this.m_genes.length; i++) {
            this.m_genes[i] = Math.floor(getRandomInt(0, 256));
        }
    }

    mutate() {
        for (let i = 0; i < this.m_genes.length; i++)
        {
            if (Math.random() < 0.10) {
                this.m_genes[i] = Math.floor(getRandomInt(0, 256));
            }
        }
    }
}

// ---> OUTSIDE OF CLASS !!

export function crossover(a:Genotype, b:Genotype)
{
    let c:Genotype = new Genotype();

    for (let i = 0; i < c.m_genes.length; i++)
    {
        if (Math.random() < 0.5) c.m_genes[i] = a.m_genes[i]; // It's 50% chance of getting either one or the other.
        else c.m_genes[i] = b.m_genes[i];
    }

    return c;
}

function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
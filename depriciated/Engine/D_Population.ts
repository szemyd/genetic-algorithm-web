import {Individual} from './C_Individual';
import {Phenotype} from './B_Pheno';
import {crossover} from './A_Geno';
import {global} from '../Params/global';
import p5 from 'p5';

export class Population {
    m_pop:Array<Individual>=[]; // Array of individuals
  
    constructor() {
      this.m_pop = new Array<Individual>(global.popNum);
    
  
      for (let i = 0; i<this.m_pop.length; i++) {
        this.m_pop[i] = new Individual();
        this.m_pop[i].evaluate(triangle);
      }
    //   Arrays.sort(this.m_pop); // Sorts from the smallest to the biggest fitness
      this.m_pop.sort(); // Sorts from the smallest to the biggest fitness
    }
  
    evolve(triangle:p5.Vector) {
      // Normally, do this for the entire population with a for loop
      // We need to store the values and replace them all together after all iterations are completed so not to affect the current breeding. 
     let a:Individual  = this.select();
      let b: Individual  = this.select();
      let x:Individual = breed (a, b); // breeding is not a method of the class. it is OUTSIDE the class
      this.m_pop[0] = x; // or m_pop[i]. 
      x.evaluate(triangle); // we need to evaluate() to override the default fitness of 0.0
      this.m_pop.sort();
    }
  
    select() {
      // Pick an element close to the highest fitness, but allow for smaller fitness too
      // This codes probability of being chosen
      let which:number = Math.floor((global.popNum) - 1e-6 )* (1.0 - Math.pow(Math.random(),2));
  
      console.log(which);
      return this.m_pop[which];
      /*        (int) floor(((float) popNum - 1e-6) * 
       floor makes sure it does not get popNum (last index is popNum-1)
       then it creates a float number close to popNum
       Get a small number (sq of a number minor thean 1) and reverse it 
       (1.0 - sq (random(0,1))));
       Much more possibilities to get a 1
       So more possibilities to get numbers with higher fitness  */
    }
  }//---------------------------------------------------------------------------------------
  
  
  function breed(a:Individual, b:Individual) {
    let c:Individual = new Individual();
  
    c.m_genotype = crossover(a.m_genotype, b.m_genotype);
    c.m_genotype.mutate();
    c.m_phenotype = new Phenotype(c.m_genotype);
  
    return c;
  }
  /*
  http://docs.oracle.com/javase/6/docs/api/java/util/Arrays.html
   sort
   
   public static void sort(Object[] a)
   Sorts the specified array of objects into ascending order, according to the natural ordering of its elements. All elements in the array must implement the Comparable interface. Furthermore, all elements in the array must be mutually comparable (that is, e1.compareTo(e2) must not throw a ClassCastException for any elements e1 and e2 in the array).
   This sort is guaranteed to be stable: equal elements will not be reordered as a result of the sort.
   
   The sorting algorithm is a modified mergesort (in which the merge is omitted if the highest element in the low sublist is less than the lowest element in the high sublist). This algorithm offers guaranteed n*log(n) performance.
   
   Parameters:
   a - the array to be sorted
   Throws:
   ClassCastException - if the array contains elements that are not mutually comparable (for example, strings and integers).
   */
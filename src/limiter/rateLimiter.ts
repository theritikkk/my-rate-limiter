import type { Algorithm } from "../algorithms/algorithm.js";

export class RateLimiter {

  constructor( private algorithm: Algorithm ) {}

  allow( key: string ) {
    return this.algorithm.allow( key );
  }
  
}

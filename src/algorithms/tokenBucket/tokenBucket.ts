import type { Algorithm } from "../algorithm.js";
import type { Store } from "../../store/store.js";

import { tokenBucketLua } from "./tokenBucketLua.js";

export class TokenBucket implements Algorithm {

  constructor(
    private store: Store,
    private capacity: number,
    private refillRate: number
  ) {}

  async allow(key: string): Promise<boolean> {

    if( !this.store.eval ) {
      throw new Error( "TokenBucket requires RedisStore" );
    }

    const result = await this.store.eval(
      
      tokenBucketLua,

      [`tb:${key}`],

      [
        this.capacity.toString(),
        this.refillRate.toString(),
        Date.now().toString()
      ]

    );

    return result === 1;
  }
  
}

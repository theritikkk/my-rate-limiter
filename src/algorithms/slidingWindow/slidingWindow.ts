/*
import type { Algorithm } from "./algorithm.js";
import type { Store } from "../store/store.js";

export class SlidingWindow implements Algorithm {

  constructor(
    private store: Store,
    private limit: number,
    private windowMs: number
  ) {}

  async allow(key: string): Promise<boolean> {

    const now = Date.now();

    let timestamps: number[] =
      (await this.store.get(key)) || [];

    timestamps = timestamps.filter(
      t => now - t < this.windowMs
    );

    if (timestamps.length >= this.limit)
      return false;

    timestamps.push(now);

    await this.store.set(key, timestamps, this.windowMs);

    return true;
  }
}
*/

import type { Algorithm } from "../algorithm.js";
import type { Store } from "../../store/store.js";
import { slidingWindowLua } from "./slidingWindowLua.js";

export class SlidingWindow implements Algorithm {
  
  constructor(
    private store: Store,
    private limit: number,
    private windowMs: number
  ) {}

  async allow( key: string ): Promise<boolean> {

    if( !this.store.eval ) {
      throw new Error("Sliding window requires RedisStore");
    }

    const result = await this.store.eval(

      slidingWindowLua,

      [`sw:${key}`],

      [
        Date.now().toString(),
        this.windowMs.toString(),
        this.limit.toString(),
      ]

    );

    return result === 1;
  }
  
}

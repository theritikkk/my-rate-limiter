import { createClient } from "redis";
import { tokenBucketLua } from "./tokenBucketLua.js";

const client = createClient();
await client.connect();

export class RedisTokenBucketLimiter {

  constructor(
    private capacity: number,
    private refillRatePerSec: number
  ) {}

  async allow( key: string ): Promise<boolean> {
    
    const redisKey = `bucket:${key}`;
    const now = Date.now();

    const result = await client.eval( tokenBucketLua, {
      
        keys: [redisKey],
      
      arguments: [
        this.capacity.toString(),
        this.refillRatePerSec.toString(),
        now.toString()
      ]

    });

    return result === 1;
    
  }
}

import { createClient } from "redis";
import { slidingWindowLua } from "./slidingWindowLua.js";

const client = createClient();
await client.connect();

export class SlidingWindowLimiter {

  constructor(
    private limit: number,
    private windowMs: number
  ) {}

  async allow( key: string ): Promise<boolean> {
    
    const redisKey = `sw:${key}`;
    const now = Date.now();

    const result = await client.eval( 
        slidingWindowLua, 
        {
            keys: [ redisKey ],
            
            arguments: [
                now.toString(),
                this.windowMs.toString(),
                this.limit.toString(),
            ],
        }
    );

    return result === 1;

  }
  
}

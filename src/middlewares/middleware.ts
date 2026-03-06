import type { Request, Response, NextFunction } from "express";


// import { RedisTokenBucketLimiter } from "./rateLimiter/tokenBucket/tokenBucketLimiter.js";
// const limiter = new RedisTokenBucketLimiter( 10, 1 );


// import { TokenBucketLimiter } from "./rateLimiter/tokenBucket/tokenBucketLimiter.ts";
// const limiter = new TokenBucketLimiter(10, 1); 
// 10 max, refill 1 token pre second




// import { SlidingWindowLimiter } from "./rateLimiter/slidingWindow/slidingWindowLimiter.js";
// const limiter = new SlidingWindowLimiter( 5, 10000 );


import type { RateLimiter } from "../limiter/rateLimiter.js";
import { metrics } from "../metrics/metrics.js";


export function createRateLimiterMiddleware( limiter: RateLimiter ):
    ( req: Request, res: Response, next: NextFunction ) => Promise<void> {
        return async (req, res, next) => {
            
            const key = req.ip ?? "unknown";
            const allowed = await limiter.allow( key );
            
            if( allowed ) {
                metrics.allowed++;
            }
            else {
                metrics.blocked++;
            }
            
            if( !allowed ) {
                res.status( 429 ).json( { error: "Too many requests" } );
                return;
            }
            
            next();
        };
    }

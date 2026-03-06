import express from "express";
import "dotenv/config";

import { RedisStore } from "./store/redisStore.js";

import { MemoryStore } from "./store/memoryStore.js";

import { TokenBucket } from "./algorithms/tokenBucket/tokenBucket.js";
import { SlidingWindow } from "./algorithms/slidingWindow/slidingWindow.js";

import { RateLimiter } from "./limiter/rateLimiter.js";

import { createRateLimiterMiddleware } from "./middlewares/middleware.js";

import { metrics } from "./metrics/metrics.js";

const app = express();
// create an express application ( which is server )

// app.use( rateLimiter );
// rateLimiter is now the global variable
// all the requests will go through rateLimiter first before reaching any route


const store = process.env.NODE_ENV === 
  "production" ? new RedisStore() : new MemoryStore();

const algorithm = process.env.ALGORITHM === 
  "sliding" ? new SlidingWindow( store, 5, 10_000 ) : new TokenBucket( store, 10, 1 );
  
const limiter = new RateLimiter( algorithm );



app.use( createRateLimiterMiddleware( limiter ) );

const PORT = process.env.PORT ? Number( process.env.PORT ) : 3000;

app.get( "/", ( req, res ) => {

  res.send( "The Rate Limiter is running. " );

});


app.get( "/metrics", ( req, res ) => {
  
  res.json( metrics );

});



/*
To apply only at the login page :

app.post("/login", rateLimiter, (req, res) => {
  // password check logic
  res.send("Login attempt processed");
});
*/


app.listen( PORT, () => {

  console.log( `Server running on ${ PORT }. ` );

});

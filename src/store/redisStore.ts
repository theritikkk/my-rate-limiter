import { createClient } from "redis";
import type { RedisClientType } from "redis";

import type { Store } from "./store.js"

export class RedisStore implements Store {

  private client: RedisClientType;

  constructor() {
    this.client = createClient();

    this.client.on( "error", err =>
      console.error( "Redis error:", err )
    );
  }

  private async connect() {
    
    if( !this.client.isOpen ) {
      await this.client.connect();
    }

  }

  async get( key: string ) {

    await this.connect();

    const data = await this.client.get( key );

    return data ? JSON.parse( data ) : null;

  }

  async set( key: string, value: any, ttlMs?: number ) {

    await this.connect();

    const payload = JSON.stringify( value );

    if( ttlMs ) {
      await this.client.set( key, payload, { PX: ttlMs } );
    } 
    
    else {
      await this.client.set( key, payload );
    }

  }

  async del( key: string ) {

    await this.connect();

    await this.client.del( key );
    
  }

  async eval( script: string, keys: string[], args: string[] ): Promise<number> {

    await this.connect();

    const result = await this.client.eval( script, { keys, arguments: args, } );

    return Number(result);

  }

  async close() {

    await this.client.quit();

  }
  
}

import type { Store } from "./store.js";

export class MemoryStore implements Store {
  
  private map = new Map<string, any>();

  async get( key: string ) {
    return this.map.get( key );
  }

  async set( key: string, value: any ) {
    this.map.set( key, value );
  }

  async del( key: string ) {
    this.map.delete( key );
  }
  
}

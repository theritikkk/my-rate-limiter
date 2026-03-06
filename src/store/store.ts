export interface Store {
  
  get( key: string ) : Promise<any>;

  set( key: string, value: any, ttlMs?: number ) : Promise<void>;

  del( key: string ) : Promise<void>;

  eval ? ( script: string, keys: string[], args: string[] ) : Promise<number>;

}

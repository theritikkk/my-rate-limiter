type Bucket = {

  tokens: number;
  lastRefill: number;

};

export class TokenBucketLimiter {

  private buckets = new Map< string, Bucket >();

  constructor(
    private capacity: number,
    private refillRatePerSec: number
  ) {}

  allow( key: string ): boolean {

    const now = Date.now();
    let bucket = this.buckets.get( key );

    if( !bucket ) {
      bucket = { tokens: this.capacity, lastRefill: now };
      this.buckets.set( key, bucket );
    }

    // refill tokens
    const elapsed = ( now - bucket.lastRefill ) / 1000;
    const refill = elapsed * this.refillRatePerSec;

    bucket.tokens = Math.min( this.capacity, bucket.tokens + refill );
    bucket.lastRefill = now;

    if( bucket.tokens >= 1 ) {
      bucket.tokens -= 1;
      return true;
    }

    return false;

  }
}

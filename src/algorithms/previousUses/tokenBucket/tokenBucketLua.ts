export const tokenBucketLua = `
local key = KEYS[1]
local capacity = tonumber(ARGV[1])
local refillRate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])

local data = redis.call("GET", key)
local tokens
local lastRefill


if not data then
  tokens = capacity
  lastRefill = now
else
  local obj = cjson.decode( data )
  tokens = obj["tokens"]
  lastRefill = obj["lastRefill"]
end

local elapsed = ( now - lastRefill ) / 1000
local refill = elapsed * refillRate
tokens = math.min( capacity, tokens + refill )

if tokens < 1 then
  return 0
end

tokens = tokens - 1
redis.call( "SET", key, cjson.encode({ tokens = tokens, lastRefill = now }), "EX", 60 )

return 1
`;

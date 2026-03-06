export const tokenBucketLua = `
local key = KEYS[1]

local capacity = tonumber(ARGV[1])
local refillRate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])

-- load existing bucket
local data = redis.call("HMGET", key, "tokens", "last")

local tokens = tonumber(data[1])
local last = tonumber(data[2])

-- initialize bucket if empty
if tokens == nil then
  tokens = capacity
  last = now
end

-- refill logic
local elapsed = (now - last) / 1000
tokens = math.min(capacity, tokens + elapsed * refillRate)

local allowed = 0

if tokens >= 1 then
  tokens = tokens - 1
  allowed = 1
end

-- save updated state
redis.call("HMSET", key,
  "tokens", tokens,
  "last", now
)

-- expire bucket automatically
redis.call("PEXPIRE", key, 60000)

return allowed
`;

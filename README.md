# Custom Rate Limiter (Node.js + TypeScript)

A **production-ready, pluggable rate limiter** built with **Node.js, TypeScript, Redis, and Express**.
Supports multiple rate limiting algorithms and is designed for **scalability, extensibility, and real-world backend systems**.

---

## Features

* **Multiple Algorithms Supported**

  * Token Bucket
  * Sliding Window

*  **Strategy Pattern Design**
    * Easily plug and switch algorithms

* **Pluggable Storage Layer**
  * In - memory store (for development)
  * Redis store (for production)

*  **Express Middleware Integration**
*  **Metrics Tracking**
*  **Docker Support**
*  **Load & Burst Testing Scripts**

---

##  Architecture Overview

```text

Client Request
      ↓
Express Middleware
      ↓
RateLimiter (Core Engine)
      ↓
Algorithm (Token Bucket / Sliding Window)
      ↓
Store (Memory / Redis)

```

---

##  Tech Stack

* **Backend:** Node.js, Express
* **Language:** TypeScript
* **Storage:** Redis / In-Memory
* **Testing:** Custom JS scripts
* **Containerization:** Docker

---

##  Algorithms Implemented

### 1. Token Bucket

* Allows burst traffic
* Refills tokens at a constant rate
* Best for APIs with occasional spikes

**Use Case:** Public APIs, login endpoints

---

### 2. Sliding Window

* More accurate rate limiting
* Prevents sudden bursts
* Tracks requests over time window

**Use Case:** Strict rate control (payments, auth systems)

---

##  Project Structure

```
src/
│
├── algorithms/
│   ├── tokenBucket/
│   ├── slidingWindow/
│
├── limiter/
│   └── rateLimiter.ts
│
├── store/
│   ├── memoryStore.ts
│   ├── redisStore.ts
│
├── middlewares/
│   └── middleware.ts
│
├── metrics/
│
├── Tests/
│
└── server.ts
```

---


### 1. Clone the repo

```bash
git clone https://github.com/your-username/rate-limiter.git
cd rate-limiter
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the server

```bash
npm run dev
```

---

##  Configuration

Environment variables:

```env
NODE_ENV=development   # or production
ALGORITHM=token        # or sliding
```

* `development` → uses Memory Store
* `production` → uses Redis Store

---

##  Usage (Middleware)

```ts
app.use(createRateLimiterMiddleware(limiter));
```

All incoming requests will be rate-limited automatically.

---

##  Example Behavior

| Scenario             | Result                      |
| -------------------- | --------------------------- |
| Under limit          |   Request allowed           |
| Limit exceeded       |   Request blocked           |
| Burst (Token Bucket) |   Allowed (if tokens exist) |

---

##  Testing

Run burst and stress tests:

```bash
node src/Tests/burstTest.js
```

---

##  Docker Support

```bash
docker build -t rate-limiter .
docker run -p 3000:3000 rate-limiter
```

---

##  Key Learnings

* Designing **scalable backend systems**
* Implementing **rate limiting algorithms from scratch**
* Using **Redis for distributed systems**
* Applying **clean architecture & design patterns**
* Writing **production-grade middleware**

---

##  Future Improvements

* Distributed rate limiting with clustering
* Dashboard for monitoring metrics
* Support for more algorithms (Leaky Bucket, Fixed Window)
* API key / user-based limiting

---

##  Why This Project Matters

Rate limiting is a **core system design concept** used in:

* API gateways
* Authentication systems
* Payment systems
* Distributed systems

This project demonstrates **real-world backend engineering skills**.

---

## Author

**Ritik Raj**

* Interested in Backend, DevOps & Distributed Systems

---

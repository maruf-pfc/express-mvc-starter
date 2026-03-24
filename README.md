# 🚀 Express MVC Starter

> A production-ready, open-source Express 5 + TypeScript + MongoDB starter using the **MVC / Layered architecture** pattern. Built with [Bun](https://bun.sh) as the runtime and package manager.

[![CI](https://github.com/maruf-pfc/express-mvc-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/maruf-pfc/express-mvc-starter/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.x-black?logo=express)](https://expressjs.com/)
[![Bun](https://img.shields.io/badge/Bun-1.x-orange?logo=bun)](https://bun.sh/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://mongoosejs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

---

## ✨ Features

- ⚡ **Bun** — Fast runtime & package manager (no npm/node needed)
- 🔷 **TypeScript** — Strict mode + `verbatimModuleSyntax`
- 🚦 **Express 5** — Latest Express with async error handling
- 🍃 **Mongoose** — MongoDB ODM with typed models
- 🔒 **Helmet** — Secure HTTP headers out of the box
- 🌐 **CORS** — Cross-origin request support
- 📋 **Morgan** — HTTP request logger
- 🛡️ **Centralized error handling** — Global error handler + 404 middleware
- 🧰 **Shared utilities** — `ApiError`, `ApiResponse`, `catchAsync`
- 🧹 **ESLint + Prettier** — TypeScript-aware flat config
- 🐺 **Husky + lint-staged** — Auto-lint & format on every commit
- 🐳 **Docker** — Multi-stage `Dockerfile` + `docker-compose.yml` (API + MongoDB)
- 🧪 **Bun Test** — Built-in test runner, zero config

---

## 📁 Project Structure

```
express-mvc-starter/
├── src/
│   ├── __tests__/               # Test files (mirrors src structure)
│   │   ├── routes/
│   │   │   └── health.test.ts
│   │   ├── services/
│   │   │   └── health.service.test.ts
│   │   └── utils/
│   │       ├── ApiError.test.ts
│   │       └── ApiResponse.test.ts
│   ├── config/
│   │   └── index.ts             # Env vars loaded via dotenv
│   ├── controllers/
│   │   └── health.controller.ts # Request handler → delegates to service
│   ├── db/
│   │   └── connectDB.ts         # Mongoose connection
│   ├── interfaces/
│   │   └── index.ts             # Shared TypeScript interfaces
│   ├── middlewares/
│   │   ├── globalErrorHandler.ts
│   │   └── notFound.ts
│   ├── models/
│   │   └── health.model.ts      # Demo Mongoose model
│   ├── routes/
│   │   ├── health.routes.ts     # Feature router
│   │   └── index.ts             # Mounts all routers under /api/v1
│   ├── services/
│   │   └── health.service.ts    # Business logic layer
│   ├── utils/
│   │   ├── ApiError.ts
│   │   ├── ApiResponse.ts
│   │   └── catchAsync.ts
│   ├── app.ts                   # Express app factory
│   └── server.ts                # Entry point (DB + listen)
├── .env.example
├── .eslint.config.mjs
├── .prettierrc
├── .husky/
│   └── pre-commit
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
└── package.json
```

---

## 🏗️ Architecture — MVC / Layered Pattern

Each layer has a **single responsibility** and only talks to the layer directly below it:

```
Request
  ↓
Router          → routes/index.ts dispatches to feature routers
  ↓
Controller      → parses req, calls service, sends ApiResponse
  ↓
Service         → all business logic, no Express types
  ↓
Model           → Mongoose schema / database queries
```

---

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh) ≥ 1.0
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone & install

```bash
git clone https://github.com/your-username/express-mvc-starter.git
cd express-mvc-starter
bun install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env and set DATABASE_URL
```

### 3. Run in development

```bash
bun run dev
```

The API is available at `http://localhost:5000`.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start with hot-reload (`--watch`) |
| `bun run start` | Start in production mode |
| `bun run lint` | Run ESLint |
| `bun run lint:fix` | Auto-fix lint errors |
| `bun run prettier` | Check formatting |
| `bun run prettier:fix` | Auto-fix formatting |
| `bun run typecheck` | TypeScript type check |
| `bun test` | Run all tests |
| `bun test --watch` | Run tests in watch mode |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Root ping |
| `GET` | `/api/v1/health` | API + DB health status |

### Example response

```json
{
  "success": true,
  "message": "Service is healthy",
  "data": {
    "status": "ok",
    "timestamp": "2025-01-01T00:00:00.000Z",
    "uptime": "42s",
    "database": "connected"
  }
}
```

---

## 🐳 Docker

### Run with Docker Compose (API + MongoDB)

```bash
docker compose up --build
```

- API → `http://localhost:5000`
- MongoDB → `mongodb://localhost:27017`

### Build image only

```bash
docker build -t express-mvc-starter .
```

---

## 🧪 Testing

Tests use **Bun's built-in test runner** — no extra dependencies needed.

```bash
# Run all tests
bun test

# Watch mode
bun test --watch

# Specific file
bun test src/__tests__/utils/ApiError.test.ts
```

Test structure:
- **Unit tests** — `ApiError`, `ApiResponse`, `healthService`
- **Integration tests** — `/api/v1/health` route, 404 handling

---

## 🔧 Adding a New Feature

Follow these steps to add a new `users` feature:

```bash
# 1. Create the model
touch src/models/user.model.ts

# 2. Create the service
touch src/services/user.service.ts

# 3. Create the controller
touch src/controllers/user.controller.ts

# 4. Create the router
touch src/routes/user.routes.ts

# 5. Register in the route index
# In src/routes/index.ts:
# router.use('/users', userRoutes);

# 6. Write tests
touch src/__tests__/services/user.service.test.ts
touch src/__tests__/routes/user.test.ts
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `mongoose` | MongoDB ODM |
| `helmet` | Security headers |
| `cors` | Cross-origin support |
| `morgan` | HTTP request logging |
| `dotenv` | Environment variable loading |

---

## 🤝 Community

- [Contributing Guide](./CONTRIBUTING.md) — How to contribute
- [Code of Conduct](./CODE_OF_CONDUCT.md) — Community standards
- [Security Policy](./SECURITY.md) — How to report vulnerabilities
- [Changelog](./CHANGELOG.md) — What changed in each version

---

## 📄 License

MIT © [Md. Maruf Sarker](https://github.com/maruf-pfc)

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.0.0] - 2026-03-25

### Added

- Initial release of **Express MVC Starter**
- Bun 1.x as runtime and package manager
- Express 5 + TypeScript (strict mode, `verbatimModuleSyntax`)
- Mongoose for MongoDB ODM with typed model example (`health.model.ts`)
- MVC/Layered architecture pattern: `controllers/`, `services/`, `models/`, `routes/`
- Centralized global error handler and 404 middleware
- Shared utilities: `ApiError`, `ApiResponse`, `catchAsync`
- Helmet, CORS, Morgan global middlewares
- ESLint (TypeScript-aware flat config) + Prettier
- Husky pre-commit hooks + lint-staged
- Multi-stage `Dockerfile` (oven/bun:1-alpine) + Docker Compose with MongoDB
- `.env` / `.env.example` configuration
- GitHub Actions CI workflow (lint, typecheck, test)
- GitHub issue templates (bug report, feature request)
- PR template, CONTRIBUTING guide, CODE_OF_CONDUCT, SECURITY policy
- Bun built-in test runner with unit and integration tests
- Working `/api/v1/health` endpoint as pattern demonstration
- Comprehensive README

[Unreleased]: https://github.com/maruf-pfc/express-mvc-starter/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/maruf-pfc/express-mvc-starter/releases/tag/v1.0.0

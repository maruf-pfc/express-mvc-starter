# Contributing to Express MVC Starter

Thank you for considering contributing! 🎉 All contributions are welcome — whether it's a bug fix, a new feature, or an improvement to the documentation.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) ≥ 1.0
- MongoDB (local or Atlas)

### Setup

```bash
# 1. Fork the repository and clone your fork
git clone https://github.com/maruf-pfc/express-mvc-starter.git
cd express-mvc-starter

# 2. Install dependencies
bun install

# 3. Copy environment variables
cp .env.example .env

# 4. Run in development
bun run dev
```

---

## Development Workflow

```bash
# Lint
bun run lint
bun run lint:fix

# Format
bun run prettier
bun run prettier:fix

# Type check
bun run typecheck

# Tests
bun test
bun test --watch
```

All of these run automatically on every commit via Husky + lint-staged.

---

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<optional scope>): <description>

Types:
  feat      → new feature
  fix       → bug fix
  docs      → documentation changes
  style     → formatting, no logic change
  refactor  → code change that is not a fix or feature
  test      → adding or updating tests
  chore     → build process, tooling, or dependency changes
  ci        → CI/CD changes
```

**Examples:**

```bash
git commit -m "feat: add user authentication module"
git commit -m "fix: correct status code in notFound middleware"
git commit -m "docs: update README deployment section"
git commit -m "test: add integration tests for health route"
```

---

## Pull Request Process

1. **Branch** — Create a branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Code** — Make your changes following the project conventions.

3. **Test** — Ensure all tests pass and add new ones if needed:
   ```bash
   bun test
   bun run typecheck
   ```

4. **Commit** — Use conventional commits.

5. **Push & PR** — Open a pull request against `main` and fill in the PR template.

> PRs that fail CI (lint, typecheck, or tests) will not be merged.

---

Thank you for your contribution! 🚀

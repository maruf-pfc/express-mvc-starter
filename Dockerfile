# ════════════════════════════════════════
# Stage 1: Install dependencies
# ════════════════════════════════════════
FROM oven/bun:1-alpine AS deps

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ════════════════════════════════════════
# Stage 2: Production runner
# ════════════════════════════════════════
FROM oven/bun:1-alpine AS runner

WORKDIR /app

# Copy installed node_modules
COPY --from=deps /app/node_modules ./node_modules

# Copy application source
COPY . .

EXPOSE 5000

CMD ["bun", "run", "src/server.ts"]

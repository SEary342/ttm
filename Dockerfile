# Frontend Build
FROM node:26-alpine AS frontend-builder

WORKDIR /frontend

COPY frontend/package*.json ./

RUN npm ci

COPY frontend .

RUN npm run build

# Backend Build

FROM ghcr.io/astral-sh/uv:python3.14-trixie-slim AS backend-builder

WORKDIR /app

COPY backend/pyproject.toml .
COPY backend/uv.lock .

RUN uv sync --locked --no-dev

COPY backend .

# Runtime

FROM python:3.14-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY --from=backend-builder /app /app
COPY --from=frontend-builder /frontend/build/client /frontend/build/client

ENV PATH="/app/.venv/bin:$PATH"

EXPOSE 8000

VOLUME [ "/app/data" ]

CMD [ "fastapi", "run", "app/main.py", "--host", "0.0.0.0", "--port", "8000"]

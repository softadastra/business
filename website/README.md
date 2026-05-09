# Softadastra Site

Frontend web application for **Softadastra Cloud**, the dashboard and public site for testing whether APIs lose data when the network fails.

Softadastra Cloud helps run reliability tests against HTTP APIs, collect agent events, save reports, and visualize risks such as timeouts, retries, offline behavior, and recovery problems.

## Purpose

This repository contains the frontend for:

- Public landing page
- Pricing page
- Local API documentation page
- Authentication pages
- Dashboard overview
- Projects management
- Agents management
- Reliability runs
- Run events
- Reports
- Local MVP settings

## Tech Stack

- Vue 3
- Vite
- Vue Router
- Plain CSS
- Softadastra Cloud API backend

## Project Structure

```text
softadastra-site/
├── public/
├── src/
│   ├── api/
│   │   ├── client.js
│   │   ├── authApi.js
│   │   ├── projectsApi.js
│   │   ├── agentsApi.js
│   │   ├── runsApi.js
│   │   ├── eventsApi.js
│   │   └── reportsApi.js
│   ├── app/
│   │   ├── AppShell.vue
│   │   └── bootstrap.js
│   ├── components/
│   │   ├── common/
│   │   └── dashboard/
│   ├── config/
│   │   └── env.js
│   ├── features/
│   │   ├── auth/
│   │   ├── projects/
│   │   ├── agents/
│   │   ├── runs/
│   │   ├── events/
│   │   ├── reports/
│   │   └── score/
│   ├── layouts/
│   ├── pages/
│   │   ├── public/
│   │   ├── auth/
│   │   └── dashboard/
│   ├── router/
│   ├── styles/
│   └── utils/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Backend API

By default, the frontend expects the API backend to run at:

```
http://127.0.0.1:8080
```

Success response format:

```json
{
  "ok": true,
  "message": "Runs loaded",
  "data": {}
}
```

Error response format:

```json
{
  "ok": false,
  "status": 401,
  "error": "unauthorized",
  "message": "Missing agent API key"
}
```

## Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Example:

```env
VITE_APP_NAME=Softadastra Cloud
VITE_APP_ENVIRONMENT=development
VITE_API_BASE_URL=http://127.0.0.1:8080
```

## Install

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Then open the Vite URL printed in the terminal.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Main User Flow

The current MVP frontend follows this flow:

1. Register or login
2. Create a project
3. Create an agent for the project
4. Store the generated one-time agent API key
5. Create a run using the agent key
6. Submit run events
7. Finish the run
8. Submit a report
9. Review runs and reports in the dashboard

## Agent API Key

Agent-protected endpoints require this header:

```
x-agent-api-key: sa_agent_key_xxx
```

> Agent keys are shown only once when an agent is created or rotated.

For local MVP testing, the dashboard includes a settings page where a temporary agent key can be stored in browser `localStorage`.

## Current Pages

**Public pages:**

```
/
/pricing
/docs
```

**Auth pages:**

```
/login
/register
```

**Dashboard pages:**

```
/dashboard
/dashboard/projects
/dashboard/projects/:id
/dashboard/agents
/dashboard/runs
/dashboard/runs/:id
/dashboard/reports
/dashboard/settings
```

## Development Notes

This frontend is intentionally simple:

- No UI framework
- No external state manager
- No heavy chart dependency yet
- Plain CSS for full control
- API access centralized in `src/api`
- Domain logic grouped in `src/features`
- Layouts separated from pages

The goal is to keep the MVP easy to understand, easy to debug, and directly aligned with the Softadastra Cloud backend.

## Production Notes

Before production, the following items should be reviewed:

- Dashboard authentication and authorization
- Secure token storage strategy
- Protected reports and dashboard routes
- CORS configuration
- API URL configuration for deployment
- Error and empty states
- SEO metadata for public pages
- Vercel or static hosting configuration

## License

Copyright 2026, Softadastra. All rights reserved.

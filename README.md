# Binance WebSocket Real-time Price Monitor

A real-time cryptocurrency price monitoring application built with React + TypeScript + Vite, providing live price updates through the Binance WebSocket API.

## 🚀 Live Demo

[GitHub Pages Deployment](https://yo0guitarit.github.io/binance-websocket-demo/)

![Deployment Status](https://github.com/yo0guitarit/binance-websocket-demo/actions/workflows/deploy.yml/badge.svg)

> **Note:** It takes about 2-3 minutes to see the latest changes after deployment. You can check the latest deployment status through the badge above.

## ✨ Features

- ✅ Real-time price updates (via WebSocket)
- ✅ Multiple cryptocurrency monitoring (BTC, ETH, ADA)
- ✅ 24-hour price change percentage
- ✅ 24-hour high/low prices
- ✅ 24-hour trading volume display
- ✅ Responsive design
- ✅ Connection status indicator
- ✅ Automated test coverage
- ✅ CI/CD automatic deployment

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Development & Build Tool
- **use-websocket** - WebSocket Management
- **Binance WebSocket API** - Real-time Data Source
- **Vitest + Testing Library** - Testing Framework
- **GitHub Actions** - CI/CD Pipeline
- **GitHub Pages** - Static Site Hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 8+

### Installation & Running

```bash
# Clone the project
git clone https://github.com/yo0guitarit/binance-websocket-demo.git
cd binance-websocket-demo

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test:run

# Build project
pnpm build

# Preview build result
pnpm preview
```

## 🧪 Testing

The project includes comprehensive unit test coverage:

```bash
# Run all tests
pnpm test:run

# Run tests in development mode (watch mode)
pnpm test

# Check code quality
pnpm lint
```

Test Coverage:

- ✅ React component tests
- ✅ Utility function tests
- ✅ Type safety checks

## 📦 GitHub Pages Auto Deployment

The project uses GitHub Actions for automated testing and deployment pipeline.

### Setup Steps

1. **Fork or clone this project to your GitHub account**

2. **Update project configuration**

   ```typescript
   // The base URL in vite.config.ts is already set to:
   base: "/binance-websocket-demo/",
   ```

   > If you fork this project and rename it, please change the above path to your project name.

3. **Enable GitHub Pages**

   - Go to project Settings → Pages
   - Select "GitHub Actions" as Source

4. **Push to main branch**
   ```bash
   git add .
   git commit -m "feat: initialize project"
   git push origin main
   ```

### CI/CD Workflow

Every push to the `main` branch triggers GitHub Actions to automatically execute:

#### Test Phase

- ⚙️ Set up pnpm and Node.js 20 environment
- 📦 Install project dependencies (`--prefer-frozen-lockfile`)
- 🧪 Run all unit tests (8 tests)
- 🔍 Execute ESLint code checks
- ✅ Ensure code quality

#### Deployment Phase (only after tests pass)

- ⚙️ Re-setup clean environment
- 📦 Reinstall dependencies for consistency
- 🧪 Re-run tests to ensure stability
- 🏗️ Build React application (`pnpm build`)
- 📦 Package static assets to `./dist`
- 🚀 Auto-deploy to GitHub Pages

### Workflow Permissions

GitHub Actions requires the following permissions:

- `contents: read` - Read code
- `pages: write` - Write to Pages
- `id-token: write` - Authentication

### Troubleshooting

**CI dependency installation failed?**

1. Confirm `pnpm-lock.yaml` is committed to Git
2. Check for network issues or inaccessible package repositories
3. View complete error logs on Actions page

**Deployment failed?**

1. Check error logs on Actions page
2. Confirm GitHub Pages is properly enabled
3. Check if base URL configuration is correct
4. Ensure GitHub Pages is set to "GitHub Actions" source

**Tests failed?**

1. Run `pnpm test:run` locally to check
2. Fix failed tests and push again
3. Confirm all test suites are properly installed

**Build failed?**

1. Run `pnpm build` locally to check
2. Fix TypeScript or build errors
3. Check for missing dependency packages

**Page displays blank or 404?**

1. Wait 2-3 minutes for deployment to complete
2. Check base URL setting in vite.config.ts
3. Confirm GitHub Pages points to the correct branch

## 📁 Project Structure

```
src/
├── components/              # React Components
│   ├── PriceDisplay.tsx    # Price display component
│   ├── PriceDisplay.css    # Component styles
│   └── __tests__/          # Component tests
├── hooks/                   # Custom Hooks
│   └── useBinanceTicker.ts # Binance WebSocket Hook
├── types/                   # TypeScript Type Definitions
│   └── binance.ts          # Binance API Types
├── test/                    # Test setup and utility tests
│   ├── setup.ts            # Test environment setup
│   └── integration.test.ts # Utility function tests
├── App.tsx                  # Main application component
├── App.css                  # Main application styles
└── main.tsx                 # Application entry point
```

## 🔌 WebSocket API

Using Binance WebSocket Stream API:

- **Endpoint:** `wss://stream.binance.com:9443/ws/{symbol}@ticker`
- **Supported Trading Pairs:** BTCUSDT, ETHUSDT, ADAUSDT, etc.
- **Official Documentation:** [Binance WebSocket API](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)

### API Data Format

```typescript
interface BinanceTickerData {
  e: "24hrTicker"; // Event type
  E: number; // Event time
  s: string; // Symbol
  p: string; // Price change
  P: string; // Price change percent
  c: string; // Last price
  h: string; // High price
  l: string; // Low price
  v: string; // Total traded volume
  // ... more fields
}
```

## 🛡️ Development Notes

- WebSocket connections automatically handle reconnection
- All price data updates in real-time
- Supports monitoring multiple trading pairs simultaneously
- Uses TypeScript for type safety
- Includes comprehensive error handling mechanisms
- Follows React best practices

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build project
pnpm preview      # Preview build result
pnpm test         # Run tests (watch mode)
pnpm test:run     # Run tests (single run)
pnpm lint         # Check code quality
```

## 📄 License

MIT License

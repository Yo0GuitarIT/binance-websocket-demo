# Binance WebSocket 即時價格監控

這是一個使用 React + TypeScript + Vite 建立的即時加密貨幣價格監控應用程式，透過 Binance WebSocket API 即時更新價格資訊。

## 🚀 在線演示

[GitHub Pages 部署連結](https://yourusername.github.io/binance-websocket-demo/)

> **注意：** 請將 `yourusername` 替換為您的 GitHub 用戶名，並在 `vite.config.ts` 中更新對應的 base URL。

## ✨ 功能特色

- ✅ 即時價格更新（透過 WebSocket）
- ✅ 多個加密貨幣監控（BTC、ETH、ADA）
- ✅ 24 小時價格變化百分比
- ✅ 24 小時最高/最低價格
- ✅ 24 小時交易量顯示
- ✅ 響應式設計
- ✅ 連線狀態指示器
- ✅ 自動化測試覆蓋
- ✅ CI/CD 自動部署

## 🛠️ 技術架構

- **React 19** - UI 框架
- **TypeScript** - 型別安全
- **Vite** - 開發與建置工具
- **use-websocket** - WebSocket 管理
- **Binance WebSocket API** - 即時數據來源
- **Vitest + Testing Library** - 測試框架
- **GitHub Actions** - CI/CD 流程
- **GitHub Pages** - 靜態網站託管

## 🚀 快速開始

### 前置要求

- Node.js 20+
- pnpm 8+

### 安裝與運行

```bash
# 克隆專案
git clone https://github.com/yourusername/binance-websocket-demo.git
cd binance-websocket-demo

# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm dev

# 運行測試
pnpm test:run

# 建置專案
pnpm build

# 預覽建置結果
pnpm preview
```

## 🧪 測試

專案包含完整的單元測試覆蓋：

```bash
# 運行所有測試
pnpm test:run

# 開發模式運行測試（監聽模式）
pnpm test

# 檢查代碼品質
pnpm lint
```

測試覆蓋範圍：

- ✅ React 組件測試
- ✅ 工具函數測試
- ✅ 型別安全檢查

## 📦 GitHub Pages 自動部署

專案使用 GitHub Actions 自動化測試和部署流程。

### 設置步驟

1. **Fork 或克隆此專案到您的 GitHub 帳戶**

2. **更新專案配置**

   ```typescript
   // vite.config.ts 中更新 base URL
   base: process.env.NODE_ENV === 'production' ? '/您的專案名稱/' : '/',
   ```

3. **啟用 GitHub Pages**

   - 進入專案的 Settings → Pages
   - 在 "Source" 選擇 "GitHub Actions"

4. **推送到 main 分支**
   ```bash
   git add .
   git commit -m "feat: 初始化專案"
   git push origin main
   ```

### CI/CD 工作流程

每次推送到 `main` 分支時，GitHub Actions 會自動執行：

#### 測試階段

- 🧪 運行所有單元測試
- 🔍 執行 ESLint 代碼檢查
- ✅ 確保代碼品質

#### 部署階段（僅在測試通過後）

- 🏗️ 建置 React 應用
- 📦 打包靜態資源
- 🚀 自動部署到 GitHub Pages

### 工作流程權限

GitHub Actions 需要以下權限：

- `contents: read` - 讀取代碼
- `pages: write` - 寫入 Pages
- `id-token: write` - 身份驗證

### 故障排除

**部署失敗？**

1. 檢查 Actions 頁面的錯誤日誌
2. 確認 GitHub Pages 已正確啟用
3. 檢查 base URL 配置是否正確

**測試失敗？**

1. 本地運行 `pnpm test:run` 檢查
2. 修復失敗的測試後重新推送

**建置失敗？**

1. 本地運行 `pnpm build` 檢查
2. 修復 TypeScript 或建置錯誤

## 📁 專案結構

```
src/
├── components/              # React 組件
│   ├── PriceDisplay.tsx    # 價格顯示組件
│   ├── PriceDisplay.css    # 組件樣式
│   └── __tests__/          # 組件測試
├── hooks/                   # 自定義 Hooks
│   └── useBinanceTicker.ts # Binance WebSocket Hook
├── types/                   # TypeScript 型別定義
│   └── binance.ts          # Binance API 型別
├── test/                    # 測試設定與工具測試
│   ├── setup.ts            # 測試環境設定
│   └── integration.test.ts # 工具函數測試
├── App.tsx                  # 主應用組件
├── App.css                  # 主應用樣式
└── main.tsx                 # 應用入口點
```

## 🔌 WebSocket API

使用 Binance WebSocket Stream API：

- **端點：** `wss://stream.binance.com:9443/ws/{symbol}@ticker`
- **支援的交易對：** BTCUSDT, ETHUSDT, ADAUSDT 等
- **官方文檔：** [Binance WebSocket API](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)

### API 資料格式

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
  // ... 更多欄位
}
```

## 🛡️ 開發注意事項

- WebSocket 連線會自動處理重連
- 所有價格數據都會即時更新
- 支援多個交易對同時監控
- 使用 TypeScript 確保型別安全
- 包含完整的錯誤處理機制
- 遵循 React 最佳實踐

## 🔧 可用腳本

```bash
pnpm dev          # 啟動開發伺服器
pnpm build        # 建置專案
pnpm preview      # 預覽建置結果
pnpm test         # 運行測試（監聽模式）
pnpm test:run     # 運行測試（單次）
pnpm lint         # 檢查代碼品質
```

## 📄 授權

MIT License

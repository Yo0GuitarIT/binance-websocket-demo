# Binance WebSocket 即時價格監控

這是一個使用 React + TypeScript + Vite 建立的即時加密貨幣價格監控應用程式，透過 Binance WebSocket API 即時更新價格資訊。

## 功能特色

- ✅ 即時價格更新（透過 WebSocket）
- ✅ 多個加密貨幣監控（BTC、ETH、ADA）
- ✅ 24 小時價格變化百分比
- ✅ 24 小時最高/最低價格
- ✅ 24 小時交易量顯示
- ✅ 響應式設計
- ✅ 連線狀態指示器

## 技術架構

- **React 19** - UI 框架
- **TypeScript** - 型別安全
- **Vite** - 開發與建置工具
- **use-websocket** - WebSocket 管理
- **Binance WebSocket API** - 即時數據來源

## 快速開始

### 安裝依賴

```bash
pnpm install
```

### 啟動開發伺服器

```bash
pnpm run dev
```

開啟瀏覽器並訪問 `http://localhost:5173`

### 建置專案

```bash
pnpm run build
```

### 預覽建置結果

```bash
pnpm run preview
```

## 專案結構

```
src/
├── components/          # React 組件
│   ├── PriceDisplay.tsx # 價格顯示組件
│   └── PriceDisplay.css # 樣式檔案
├── hooks/               # 自定義 Hook
│   └── useBinanceTicker.ts # Binance WebSocket Hook
├── types/               # TypeScript 型別定義
│   └── binance.ts       # Binance API 型別
├── App.tsx              # 主應用程式組件
├── App.css              # 主應用程式樣式
└── main.tsx             # 應用程式入口點
```

## WebSocket API

使用 Binance WebSocket Stream API：

- 端點：`wss://stream.binance.com:9443/ws/{symbol}@ticker`
- 支援的交易對：BTCUSDT, ETHUSDT, ADAUSDT 等

## 開發注意事項

- WebSocket 連線會自動處理重連
- 所有價格數據都會即時更新
- 支援多個交易對同時監控
- 使用 TypeScript 確保型別安全

## 授權

MIT License

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

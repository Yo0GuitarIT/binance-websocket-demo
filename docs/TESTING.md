# 單元測試指南

## 測試環境設定

本專案使用 **Vitest** 作為測試框架，搭配 **React Testing Library** 進行簡單的單元測試。

## 可用的測試指令

```bash
# 執行所有測試 (watch 模式)
pnpm test

# 執行測試一次後退出
pnpm test:run

# 只執行工具函數測試
pnpm test -- src/test/integration.test.ts

# 只執行組件測試
pnpm test -- src/components/__tests__/PriceDisplay.test.tsx
```

## 測試結構

```
src/
├── test/
│   ├── setup.ts              # 基本測試設定
│   └── integration.test.ts    # 工具函數單元測試
└── components/
    └── __tests__/
        └── PriceDisplay.test.tsx  # 組件基本單元測試
```

## 測試類型

### 1. 工具函數單元測試 ✅

- 價格格式化函數
- 百分比格式化函數
- 價格變化樣式判斷
- WebSocket URL 生成

### 2. 組件基本單元測試 ✅

- 組件基本渲染
- 交易對名稱顯示
- 載入狀態顯示
- 連線狀態顯示

## 測試覆蓋的功能

### ✅ 已測試功能

- 價格格式化 (`$95,234.56`)
- 百分比格式化 (`+2.45%`, `-1.23%`)
- 價格變化樣式類別 (`price-up`, `price-down`, `price-neutral`)
- WebSocket URL 生成
- 組件基本渲染
- 交易對名稱轉換

## 測試策略

- **簡潔明了**：專注於核心功能的單元測試
- **易於維護**：避免複雜的 Mock 和狀態管理
- **快速執行**：測試執行快速，適合開發期間頻繁執行

## 執行測試建議

1. **開發期間**：使用 `pnpm test` watch 模式
2. **功能驗證**：使用 `pnpm test:run` 確保所有測試通過
3. **重點測試**：工具函數和組件基本功能

測試環境設定簡潔，專注於核心功能驗證！

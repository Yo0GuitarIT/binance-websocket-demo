import { describe, it, expect } from "vitest";

describe("工具函數單元測試", () => {
  it("應該正確格式化價格", () => {
    const formatPrice = (price: string) => {
      return parseFloat(price).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };

    expect(formatPrice("95234.56")).toBe("95,234.56");
    expect(formatPrice("1000")).toBe("1,000.00");
    expect(formatPrice("0.123456")).toBe("0.12");
  });

  it("應該正確格式化百分比", () => {
    const formatPercentage = (percentage: string) => {
      const num = parseFloat(percentage);
      return `${num > 0 ? "+" : ""}${num.toFixed(2)}%`;
    };

    expect(formatPercentage("2.45")).toBe("+2.45%");
    expect(formatPercentage("-1.23")).toBe("-1.23%");
    expect(formatPercentage("0")).toBe("0.00%");
  });

  it("應該正確判斷價格變化類別", () => {
    const getPriceChangeClass = (percentage: string) => {
      const num = parseFloat(percentage);
      return num > 0 ? "price-up" : num < 0 ? "price-down" : "price-neutral";
    };

    expect(getPriceChangeClass("2.45")).toBe("price-up");
    expect(getPriceChangeClass("-1.23")).toBe("price-down");
    expect(getPriceChangeClass("0")).toBe("price-neutral");
  });

  it("應該生成正確的 WebSocket URL", () => {
    const generateTickerUrl = (symbol: string) => {
      return `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`;
    };

    expect(generateTickerUrl("BTCUSDT")).toBe(
      "wss://stream.binance.com:9443/ws/btcusdt@ticker"
    );
    expect(generateTickerUrl("ethusdt")).toBe(
      "wss://stream.binance.com:9443/ws/ethusdt@ticker"
    );
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PriceDisplay } from "../PriceDisplay";

// 簡單的 mock - 只模擬 hook 返回值
vi.mock("../../hooks/useBinanceTicker", () => ({
  useBinanceTicker: vi.fn(() => ({
    tickerData: null,
    connectionStatus: "Connecting",
  })),
}));

describe("PriceDisplay - 基本單元測試", () => {
  it("應該正確渲染交易對名稱", () => {
    render(<PriceDisplay symbol="btcusdt" />);
    expect(screen.getByText("BTCUSDT")).toBeInTheDocument();
  });

  it("應該顯示載入狀態", () => {
    render(<PriceDisplay symbol="ethusdt" />);
    expect(screen.getByText("載入中...")).toBeInTheDocument();
  });

  it("應該顯示連線狀態", () => {
    render(<PriceDisplay symbol="adausdt" />);
    expect(screen.getByText("Connecting")).toBeInTheDocument();
  });

  it("應該將小寫交易對轉換為大寫", () => {
    render(<PriceDisplay symbol="bnbusdt" />);
    expect(screen.getByText("BNBUSDT")).toBeInTheDocument();
  });
});

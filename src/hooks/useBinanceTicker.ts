import { useState } from "react";
import { useWebSocket } from "use-websocket";
import type { BinanceTickerData } from "../types/binance";

interface UseBinanceTickerProps {
  symbol: string; // 例如 'btcusdt'
}

export const useBinanceTicker = ({ symbol }: UseBinanceTickerProps) => {
  const [tickerData, setTickerData] = useState<BinanceTickerData | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<
    "Connecting" | "Open" | "Closed" | "Error"
  >("Connecting");

  // Binance WebSocket API 端點 (官方文檔)
  // 基礎端點: wss://stream.binance.com:9443 或 wss://stream.binance.com:443
  // 文檔: https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams

  // Stream 選項:
  // @ticker: 24小時統計數據，每1000ms更新
  // @trade: 即時成交數據 (最快更新)
  // @bookTicker: 最佳買賣價 (即時更新)
  // @kline_1m: 1分鐘K線數據
  // @miniTicker: 精簡版24小時統計

  // 重要限制:
  // - 連線24小時後自動斷開
  // - 每秒最多5個訊息
  // - 伺服器每20秒發送ping，須1分鐘內回應pong
  const socketUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`;

  const { webSocket, readyState, status } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log("WebSocket connected");
      setConnectionStatus("Open");
    },
    onClose: () => {
      console.log("WebSocket disconnected");
      setConnectionStatus("Closed");
    },
    onError: (error: Event) => {
      console.error("WebSocket error:", error);
      setConnectionStatus("Error");
    },
    onMessage: (event: MessageEvent) => {
      try {
        const data: BinanceTickerData = JSON.parse(event.data);
        setTickerData(data);
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
      }
    },
  });

  return {
    tickerData,
    connectionStatus,
    readyState,
    status,
    webSocket,
  };
};

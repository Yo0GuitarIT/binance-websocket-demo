import { useState } from "react";
import { useWebSocket } from "use-websocket";
import type { BinanceBookTickerData } from "../types/binance";

interface UseBinanceBookTickerProps {
  symbol: string; // 例如 'btcusdt'
}

export const useBinanceBookTicker = ({ symbol }: UseBinanceBookTickerProps) => {
  const [bookTickerData, setBookTickerData] =
    useState<BinanceBookTickerData | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<
    "Connecting" | "Open" | "Closed" | "Error"
  >("Connecting");

  // BookTicker Stream - 最佳買賣價即時更新
  // 更新速度: 即時 (比 @ticker 更快)
  // 資料較少但更新頻率更高
  const socketUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@bookTicker`;

  const { webSocket, readyState, status } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log("BookTicker WebSocket connected");
      setConnectionStatus("Open");
    },
    onClose: () => {
      console.log("BookTicker WebSocket disconnected");
      setConnectionStatus("Closed");
    },
    onError: (error: Event) => {
      console.error("BookTicker WebSocket error:", error);
      setConnectionStatus("Error");
    },
    onMessage: (event: MessageEvent) => {
      try {
        const data: BinanceBookTickerData = JSON.parse(event.data);
        setBookTickerData(data);
      } catch (error) {
        console.error("Failed to parse BookTicker WebSocket message:", error);
      }
    },
  });

  return {
    bookTickerData,
    connectionStatus,
    readyState,
    status,
    webSocket,
  };
};

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

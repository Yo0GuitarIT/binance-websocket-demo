// Binance WebSocket API 型別定義
// 官方文檔: https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams

// Individual Symbol Ticker Streams (@ticker)
// 24hr rolling window ticker statistics for a single symbol
export interface BinanceTickerData {
  e: "24hrTicker"; // Event type
  E: number; // Event time
  s: string; // Symbol
  p: string; // Price change
  P: string; // Price change percent
  w: string; // Weighted average price
  x: string; // First trade(F)-1 price (first trade before the 24hr rolling window)
  c: string; // Last price
  Q: string; // Last quantity
  b: string; // Best bid price
  B: string; // Best bid quantity
  a: string; // Best ask price
  A: string; // Best ask quantity
  o: string; // Open price
  h: string; // High price
  l: string; // Low price
  v: string; // Total traded base asset volume
  q: string; // Total traded quote asset volume
  O: number; // Statistics open time
  C: number; // Statistics close time
  F: number; // First trade ID
  L: number; // Last trade Id
  n: number; // Total number of trades
}

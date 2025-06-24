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

// Individual Symbol Book Ticker Streams (@bookTicker)
// Pushes any update to the best bid or ask's price or quantity in real-time
export interface BinanceBookTickerData {
  u: number; // order book updateId
  s: string; // symbol
  b: string; // best bid price
  B: string; // best bid qty
  a: string; // best ask price
  A: string; // best ask qty
}

// Trade Streams (@trade)
// The Trade Streams push raw trade information
export interface BinanceTradeData {
  e: "trade"; // Event type
  E: number; // Event time
  s: string; // Symbol
  t: number; // Trade ID
  p: string; // Price
  q: string; // Quantity
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
  M: boolean; // Ignore
}

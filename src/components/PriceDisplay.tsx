import { useBinanceTicker } from "../hooks/useBinanceTicker";
import "./PriceDisplay.css";

interface PriceDisplayProps {
  symbol: string;
}

export const PriceDisplay = ({ symbol }: PriceDisplayProps) => {
  const { tickerData, connectionStatus } = useBinanceTicker({ symbol });

  const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatPercentage = (percentage: string) => {
    const num = parseFloat(percentage);
    return `${num > 0 ? "+" : ""}${num.toFixed(2)}%`;
  };

  const getPriceChangeClass = (percentage: string) => {
    const num = parseFloat(percentage);
    return num > 0 ? "price-up" : num < 0 ? "price-down" : "price-neutral";
  };

  return (
    <div className="price-display">
      <h2>{symbol.toUpperCase()}</h2>

      <div className="connection-status">
        連線狀態:{" "}
        <span className={`status ${connectionStatus.toLowerCase()}`}>
          {connectionStatus}
        </span>
      </div>

      {tickerData ? (
        <div className="ticker-info">
          <div className="current-price">
            <span className="label">當前價格:</span>
            <span className="price">${formatPrice(tickerData.c)}</span>
          </div>

          <div className="price-change">
            <span className="label">24h 變化:</span>
            <span className={`change ${getPriceChangeClass(tickerData.P)}`}>
              {formatPercentage(tickerData.P)}
            </span>
          </div>

          <div className="price-range">
            <div className="high-low">
              <span>
                24h 最高:{" "}
                <span className="price-high">${formatPrice(tickerData.h)}</span>
              </span>
              <span>
                24h 最低:{" "}
                <span className="price-low">${formatPrice(tickerData.l)}</span>
              </span>
            </div>
          </div>

          <div className="volume">
            <span className="label">24h 交易量:</span>
            <span className="volume-value">
              {parseFloat(tickerData.v).toLocaleString()}
            </span>
          </div>
        </div>
      ) : (
        <div className="loading">載入中...</div>
      )}
    </div>
  );
};

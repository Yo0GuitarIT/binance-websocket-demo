import "./App.css";
import { PriceDisplay } from "./components/PriceDisplay";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Binance 即時價格監控</h1>
        <p>使用 WebSocket 即時更新加密貨幣價格</p>
      </header>

      <main className="app-main">
        <PriceDisplay symbol="btcusdt" />
        <PriceDisplay symbol="ethusdt" />
        <PriceDisplay symbol="adausdt" />
      </main>
    </div>
  );
}

export default App;

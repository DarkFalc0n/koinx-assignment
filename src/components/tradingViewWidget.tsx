// TradingViewWidget.jsx
import useCryptoCurrency from "@/hooks/useCryptoCurrency";
import { FCProps } from "@/types";
import React, { useEffect, useRef, memo, RefObject } from "react";

const TradingViewWidget: FCProps<{ symbol: string }> = ({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:${symbol}USD",
          "interval": "30",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(152, 152, 152, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    (container.current as unknown as HTMLElement)?.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container mt-4"
      ref={container as unknown as RefObject<HTMLDivElement>}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
};

export default memo(TradingViewWidget);

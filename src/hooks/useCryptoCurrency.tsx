"use client";
import { FCProps } from "@/types";
import React, { createContext, useContext, useEffect } from "react";

type ICryptoCurrencyData = {
  symbol: string;
  name: string;
  rank: number;
  usd: number;
  image: string;
  usd_market_cap: number;
  usd_24h_vol: number;
  usd_24h_change: number;
  inr: number;
  inr_market_cap: number;
  inr_24h_vol: number;
  inr_24h_change: number;
  ath: number;
  ath_change: number;
  ath_date: Date;
  atl: number;
  atl_change: number;
  atl_date: Date;
  high_24h: number;
  low_24h: number;
  trading_volume: number;
}; //TODO: sanitize data

interface ICryptoCurrencyContext {
  coinId: string | null;
  setCoinId: React.Dispatch<React.SetStateAction<string | null>>;
  coinData: ICryptoCurrencyData | null;
  loadingData: boolean;
}

export const CryptoCurrencyContext =
  createContext<ICryptoCurrencyContext | null>(null);

export const CryptoCurrencyContextProvider: FCProps = ({ children }) => {
  const [coinId, setCoinId] = React.useState<string | null>(null);
  const [coinData, setCoinData] = React.useState<ICryptoCurrencyData | null>(
    null
  );
  const [loadingData, setLoadingData] = React.useState<boolean>(false);

  const getCoinData = async (id: string) => {
    try {
      const marketResponse = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd%2Cinr&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=2'`
      );
      const coinResponse = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );

      const marketData = await marketResponse.json();
      const coinData = await coinResponse.json();
      //zod validation
      const data = {
        symbol: JSON.stringify(coinData.symbol).slice(1, -1).toUpperCase(),
        name: coinData.name,
        rank: coinData.market_cap_rank,
        image: coinData.image.small,
        usd: marketData[coinId!].usd,
        usd_market_cap: marketData[coinId!].usd_market_cap,
        usd_24h_vol: marketData[coinId!].usd_24h_vol,
        usd_24h_change: marketData[coinId!].usd_24h_change,
        inr: marketData[coinId!].inr,
        inr_market_cap: marketData[coinId!].inr_market_cap,
        inr_24h_vol: marketData[coinId!].inr_24h_vol,
        inr_24h_change: marketData[coinId!].inr_24h_change,
        ath: coinData.market_data.ath.usd,
        ath_change: coinData.market_data.ath_change_percentage.usd,
        ath_date: new Date(coinData.market_data.ath_date.usd),
        atl: coinData.market_data.atl.usd,
        atl_change: coinData.market_data.atl_change_percentage.usd,
        atl_date: new Date(coinData.market_data.atl_date.usd),
        high_24h: coinData.market_data.high_24h.usd,
        low_24h: coinData.market_data.low_24h.usd,
        trading_volume: coinData.market_data.total_volume.usd,
      };
      setCoinData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (coinId) {
      setLoadingData(true);
      getCoinData(coinId);
      setLoadingData(false);
    }
  }, [coinId]);
  return (
    <CryptoCurrencyContext.Provider
      value={{ coinId, setCoinId, coinData, loadingData }}
    >
      {children}
    </CryptoCurrencyContext.Provider>
  );
};

export default function useCryptoCurrency() {
  const context = useContext(CryptoCurrencyContext);

  if (!context) {
    throw new Error(
      "useCryptoCurrency must be used within a CryptoCurrencyContextProvider"
    );
  }
  return context;
}

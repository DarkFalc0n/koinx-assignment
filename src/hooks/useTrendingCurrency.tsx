"use client";
import { FCProps } from "@/types";
import { useState, createContext, useContext, useEffect } from "react";

interface ITrendingCurrencyData {
  symbol: string;
  change: number;
  icon: string;
  graph: string;
  price: string;
  name: string;
}

interface ITrendingCurrencyContext {
  trendingCurrency: ITrendingCurrencyData[] | null;
  loadingData: boolean;
}

export const TrendingCurrencyContext =
  createContext<ITrendingCurrencyContext | null>(null);

export const TrendingCurrencyContextProvider: FCProps = ({ children }) => {
  const [trendingCurrency, setTrendingCurrency] = useState<
    ITrendingCurrencyData[] | null
  >(null);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const getTrendingCurrency = async () => {
    try {
      setLoadingData(true);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      setTrendingCurrency(
        data.coins.map((coin: any) => {
          return {
            symbol: coin.item.symbol,
            change: coin.item.data.price_change_percentage_24h.usd,
            icon: coin.item.small,
            graph: coin.item.data.sparkline,
            price: coin.item.data.price,
            name: coin.item.name,
          } as ITrendingCurrencyData;
        })
      );
      setLoadingData(false);
    } catch (error) {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    getTrendingCurrency();
  }, []);

  return (
    <TrendingCurrencyContext.Provider value={{ trendingCurrency, loadingData }}>
      {children}
    </TrendingCurrencyContext.Provider>
  );
};
export const useTrendingCurrency = () => {
  const context = useContext(TrendingCurrencyContext);
  if (!context) {
    throw new Error(
      "useTrendingCurrency must be used within a TrendingCurrencyContextProvider"
    );
  }
  return context;
};

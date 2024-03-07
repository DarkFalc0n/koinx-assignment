"use client";
import { FCProps } from "@/types";
import React, { ReactNode, createContext, useContext, useEffect } from "react";

type ICryptoCurrencyData = any; //TODO: sanitize data

interface ICryptoCurrencyContext {
  coinId: string | null;
  setCoinId: React.Dispatch<React.SetStateAction<string | null>>;
  coinData: ICryptoCurrencyData;
  loadingData: boolean;
}

export const CryptoCurrencyContext =
  createContext<ICryptoCurrencyContext | null>(null);

export const CryptoCurrencyContextProvider: FCProps = ({ children }) => {
  const [coinId, setCoinId] = React.useState<string | null>(null);
  const [coinData, setCoinData] = React.useState<string | null>(null);
  const [loadingData, setLoadingData] = React.useState<boolean>(false);

  const getCoinData = async (id: string) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd%2Cinr&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=2'`
      );
      const data = await response.json();
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

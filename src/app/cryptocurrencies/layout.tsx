"use client";
import AboutCrypto from "@/components/aboutCrypto";
import GetStarted from "@/components/getStarted";
import Recommendations from "@/components/recommendations";
import SentimentCard from "@/components/sentimentCard";
import TeamCard from "@/components/teamCard";
import Tokenomics from "@/components/tokenomics";
import TrendingCoins from "@/components/trendingCoins";
import { CryptoCurrencyContextProvider } from "@/hooks/useCryptoCurrency";
import { TrendingCurrencyContextProvider } from "@/hooks/useTrendingCurrency";
import React, { use } from "react";

export default function CryptocurrenciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CryptoCurrencyContextProvider>
      <TrendingCurrencyContextProvider>
        <div className="md:px-14 px-4">
          <div className="md:flex-row flex-col flex justify-between gap-5">
            <div className="grow min-h-10">
              {children}
              <SentimentCard />
              <AboutCrypto />
              <Tokenomics />
              <TeamCard />
            </div>
            <div className="flex flex-col">
              <GetStarted />
              <TrendingCoins className="mt-4" />
            </div>
          </div>
        </div>
        <Recommendations />
      </TrendingCurrencyContextProvider>
    </CryptoCurrencyContextProvider>
  );
}

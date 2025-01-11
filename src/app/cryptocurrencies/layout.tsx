"use client";
import AboutCrypto from "@/components/aboutCrypto";
import GetStarted from "@/components/getStarted";
import PerformanceCard from "@/components/performanceCard";
import Recommendations from "@/components/recommendations";
import SentimentCard from "@/components/sentimentCard";
import TeamCard from "@/components/teamCard";
import Tokenomics from "@/components/tokenomics";
import TrendingCoins from "@/components/trendingCoins";
import { CryptoCurrencyContextProvider } from "@/hooks/useCryptoCurrency";
import { TrendingCurrencyContextProvider } from "@/hooks/useTrendingCurrency";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { tabsData } from "@/lib/constants/tabs";

export default function CryptocurrenciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CryptoCurrencyContextProvider>
      <TrendingCurrencyContextProvider>
        <div className="md:px-14 px-4 md:pr-14 lg:pr-28">
          <div className="md:flex-row flex-col flex justify-between gap-5">
            <div className="md:flex-grow">
              {children}
              <Tabs
                defaultValue="overview"
                className="md:w-full overflow-x-scroll no-scrollbar my-5"
              >
                <TabsList>
                  {tabsData.map((tab) => (
                    <TabsTrigger
                      value={tab.value}
                      key={tab.value}
                      className="text-base"
                    >
                      {tab.displayName}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <PerformanceCard />
              <SentimentCard />
              <AboutCrypto />
              <Tokenomics />
              <TeamCard />
            </div>
            <div className="flex flex-col md:w-96">
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

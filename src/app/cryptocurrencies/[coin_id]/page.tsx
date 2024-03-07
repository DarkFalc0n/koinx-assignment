"use client";

import TradingViewWidget from "@/components/tradingViewWidget";
import useCryptoCurrency from "@/hooks/useCryptoCurrency";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import CoinTitle from "@/components/ui/coinTitle";
import PriceChangeIndicator from "@/components/ui/priceChangeIndicator";

const CoinPage = ({ params }: { params: { coin_id: string } }) => {
  const { setCoinId, coinData } = useCryptoCurrency();
  useEffect(() => {
    setCoinId(params.coin_id);
  }, []);
  return coinData ? (
    <div className="w-full text-primaryText bg-card p-6">
      <CoinTitle
        logoUrl={coinData!.image}
        name={coinData!.name}
        symbol={coinData!.symbol}
        rank={coinData!.rank}
      />
      <div className="flex mt-4">
        <div className="text-3xl font-semibold mt-4">${coinData.usd}</div>{" "}
        <PriceChangeIndicator change={coinData.usd_24h_change} />
        <div className="text-tertiaryText text-lg font-medium mt-5 ml-4">
          (24H)
        </div>
      </div>

      <div className="text-base font-medium">₹{coinData.inr}</div>
      <div className="h-[450px]">
        <TradingViewWidget symbol={coinData!.symbol} />{" "}
      </div>
    </div>
  ) : (
    <div className="w-full text-tertiaryText bg-card p-6 flex flex-col text-center justify-center">
      LOADING...
    </div>
  );
};

export default CoinPage;

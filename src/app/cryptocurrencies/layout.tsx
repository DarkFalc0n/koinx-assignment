import AboutCrypto from "@/components/aboutCrypto";
import GetStarted from "@/components/getStarted";
import SentimentCard from "@/components/sentimentCard";
import TeamCard from "@/components/teamCard";
import Tokenomics from "@/components/tokenomics";
import React from "react";

export default function CryptocurrenciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:px-14 px-4">
      <div className="md:flex-row flex-col flex justify-between gap-5">
        <div className="grow min-h-10">
          {children}
          <AboutCrypto />
          <Tokenomics />
          <TeamCard />
          <SentimentCard />
        </div>
        <div className="flex flex-col">
          <GetStarted />
        </div>
      </div>
    </div>
  );
}

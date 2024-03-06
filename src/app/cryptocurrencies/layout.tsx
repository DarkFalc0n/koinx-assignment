import GetStarted from "@/components/getStarted";
import SentimentCard from "@/components/sentimentCard";
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
          <SentimentCard />
        </div>
        <div className="flex flex-col">
          <GetStarted />
        </div>
      </div>
    </div>
  );
}

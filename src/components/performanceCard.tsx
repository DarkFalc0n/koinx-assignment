"use client";
import useCryptoCurrency from "@/hooks/useCryptoCurrency";
import { FCProps } from "@/types";
import { Info } from "lucide-react";
import { ReactNode } from "react";

const FundamentalMetricData: FCProps<{
  metricName: string;
  data: ReactNode;
}> = ({ metricName, data }) => {
  return (
    <div className="flex flex-col justify-center pr-2 py-1 h-16 border-b-2 border-border">
      <div className="flex justify-between">
        <div className="text-tertiaryText flex flex-col justify-center">
          {metricName}
        </div>
        <div className="text-primaryText font-semibold">{data}</div>
      </div>
    </div>
  );
};
const PerformanceCard = () => {
  const { coinData } = useCryptoCurrency();
  return (
    <div className="w-full bg-card text-primaryText py-4 pb-6 px-2 md:p-6 my-5">
      <div className="text-2xl font-semibold">Performance</div>
      <div className="text-xl md:text-lg text-secondaryText font-semibold my-4">
        Fundamentals
        <Info size={20} className="ml-2 inline" />
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1 md:gap-5">
        <FundamentalMetricData
          metricName="Bitcoin Price"
          data={`$${coinData?.usd}`}
        />
        <FundamentalMetricData
          metricName="24h Low / 24h High"
          data={`$${coinData?.low_24h} / $${coinData?.high_24h}`}
        />
        <FundamentalMetricData
          metricName="7D Low / 7D High"
          data={`$${coinData?.low_24h} / $${coinData?.high_24h}`}
        />
        <FundamentalMetricData
          metricName="Trading Volume"
          data={`$${coinData?.trading_volume}`}
        />
        <FundamentalMetricData
          metricName="Market Cap Rank"
          data={`#${coinData?.rank}`}
        />
        <FundamentalMetricData
          metricName="Market Cap "
          data={`$${coinData?.usd_market_cap.toFixed(0)}`}
        />
        <FundamentalMetricData
          metricName="Market Cap Dominance"
          data={`38.343%`}
        />
        <FundamentalMetricData
          metricName="Volume / Market Cap"
          data={`${(
            coinData?.trading_volume! / coinData?.usd_market_cap!
          ).toFixed(4)}`}
        />
        <FundamentalMetricData
          metricName="All-Time High"
          data={
            <div>
              ${coinData?.ath!.toFixed(2)}{" "}
              {
                <span className="text-primaryRed">
                  {coinData?.ath_change!.toFixed(1)}%
                </span>
              }
              {
                <div className="text-right text-secondaryText font-medium">
                  {coinData?.ath_date!.toLocaleDateString("en-us", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              }
            </div>
          }
        />
        <FundamentalMetricData
          metricName="All-Time Low"
          data={
            <div>
              ${coinData?.atl!.toFixed(2)}{" "}
              {
                <span className="text-primaryGreen">
                  {coinData?.atl_change!.toFixed(1)}%
                </span>
              }
              {
                <div className="text-right text-secondaryText font-medium">
                  {coinData?.atl_date!.toLocaleDateString("en-us", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              }
            </div>
          }
        />
      </div>
    </div>
  );
};
export default PerformanceCard;

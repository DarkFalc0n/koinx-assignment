import { useTrendingCurrency } from "@/hooks/useTrendingCurrency";
import { cn } from "@/lib/utils";
import { FCProps } from "@/types";
import PriceChangeIndicator from "./ui/priceChangeIndicator";
import { Avatar, AvatarImage } from "./ui/avatar";

const TrendingCoins: FCProps = (className) => {
  const { trendingCurrency } = useTrendingCurrency();

  return (
    <div
      className={cn(
        "bg-card md:w-[26.875rem] w-fulltext-primaryText flex flex-col md:px-6 px-3 justify-evenly rounded-2xl md:pb-6 md:pt-8 pt-6 md:mt-4 mt-4",
        className
      )}
    >
      <div className="w-full font-bold text-2xl md:text-xl md:-order-2 mt-2 mb-5 md:mb-3">
        Trending Coins (24H)
      </div>
      {trendingCurrency?.slice(0, 3).map((coin, index) => {
        const truncatedName =
          coin.name.length > 10 ? coin.name.slice(0, 10) + "..." : coin.name;
        return (
          <div className="flex justify-between my-4" key={index}>
            <div className="flex justify-start">
              <Avatar className="w-8 h-8">
                <AvatarImage src={coin.icon} />
              </Avatar>
              <div className="text-base mt-1 ml-4">{truncatedName}</div>
              <div className="text-base mt-1 ml-4">({coin.symbol})</div>
            </div>
            <PriceChangeIndicator change={coin.change} className="mt-0" />
          </div>
        );
      })}
    </div>
  );
};

export default TrendingCoins;

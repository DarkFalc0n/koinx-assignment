import { useEffect, useState } from "react";
import RecommendationCard from "./ui/recommendationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState<[] | null>(null);
  const getTrending = async () => {
    try {
      const trendingResponse = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      const data = await trendingResponse.json();
      setRecommendations(data.coins);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className="w-full bg-card md:px-14 px-4 md:pt-20">
      <div className="text-2xl font-semibold mt-6">You may also Like</div>
      <Carousel>
        <CarouselContent className="flex">
          {recommendations &&
            recommendations.map((recommendation: any) => {
              return (
                <CarouselItem
                  className="md:basis-1/5 md:w-1/6 basis-[75%] w-1/2"
                  key={recommendation.item.id}
                >
                  <RecommendationCard
                    change={
                      recommendation.item.data.price_change_percentage_24h.usd
                    }
                    symbol={recommendation.item.symbol}
                    icon={recommendation.item.small}
                    graph={recommendation.item.data.sparkline}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-2xl font-semibold mt-6">Trending Coins</div>
      <Carousel>
        <CarouselContent>
          {recommendations &&
            recommendations.map((recommendation: any) => {
              return (
                <CarouselItem
                  className="md:basis-1/5 md:w-1/6 basis-[75%] w-1/2"
                  key={recommendation.item.id}
                >
                  <RecommendationCard
                    change={
                      recommendation.item.data.price_change_percentage_24h.usd
                    }
                    symbol={recommendation.item.symbol}
                    icon={recommendation.item.small}
                    graph={recommendation.item.data.sparkline}
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Recommendations;

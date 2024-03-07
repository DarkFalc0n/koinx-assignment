import { useEffect, useState } from "react";
import RecommendationCard from "./ui/recommendationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useTrendingCurrency } from "@/hooks/useTrendingCurrency";

const Recommendations = () => {
  const { trendingCurrency } = useTrendingCurrency();
  console.log("trendingCurrency", trendingCurrency);

  return (
    <div className="w-full bg-card md:px-14 px-4 md:pt-20">
      <div className="text-2xl font-semibold mt-6">You may also Like</div>
      <Carousel>
        <CarouselContent className="flex">
          {trendingCurrency &&
            trendingCurrency.map((curr, index) => {
              return (
                <CarouselItem
                  className="md:basis-1/5 md:w-1/6 basis-[75%] w-1/2"
                  key={index}
                >
                  <RecommendationCard {...curr} />
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
          {trendingCurrency &&
            trendingCurrency.map((curr, index) => {
              return (
                <CarouselItem
                  className="md:basis-1/5 md:w-1/6 basis-[75%] w-1/2"
                  key={index}
                >
                  <RecommendationCard {...curr} />
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

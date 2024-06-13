import { FCProps } from "@/types";
import Image from "next/image";
import PriceChangeIndicator from "./priceChangeIndicator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface IRecommendationCard {
  symbol: string;
  change: number;
  icon: string;
  graph: string;
  price: string;
}

const RecommendationCard: FCProps<IRecommendationCard> = ({
  symbol,
  change,
  icon,
  graph,
  price,
}) => {

  const truncatedPrice = parseFloat(price).toFixed(6);
  return (
    <div className="w-[250px] h-[200px] border-solid border-2 border-gray-200 rounded-lg p-4 md:p-6 flex flex-col my-4 justify-between">
      <div className="flex">
        <Avatar className="w-8 h-8">
          <AvatarImage src={icon} />
        </Avatar>
        <div className="text-base mt-1 ml-4">{symbol}</div>
        <PriceChangeIndicator change={change} className="mt-0" />
      </div>
      <div className="text-xl font-medium my-1">{'$' + truncatedPrice}</div>
      <Image src={graph} width={200} height={60} alt="graph" />
    </div>
  );
};

export default RecommendationCard;

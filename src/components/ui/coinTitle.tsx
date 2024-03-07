import { FCProps } from "@/types";
import Image from "next/image";
const CoinTitle: FCProps<{
  logoUrl: string;
  name: string;
  symbol: string;
  rank: number;
}> = ({ logoUrl, name, symbol, rank }) => {
  return (
    <div className="flex">
      <Image src={logoUrl} width={28} height={28} alt="coinlogo" />
      <div className="ml-2 text-2xl font-semibold">
        {name} <span className="text-tertiaryText text-base">{symbol}</span>
      </div>
      <div className="bg-tertiaryText text-card rounded-[8px] px-2 py-1 md:ml-4 ml-2">
        Rank #{rank}
      </div>
    </div>
  );
};

export default CoinTitle;

import { FCProps } from "@/types";
import React from "react";
import PercentageBar from "./ui/percentageBar";

const AnalystEstimates: FCProps = () => {
  return (
    <div className="w-full h-32 flex justify-start mt-6">
      <div className="flex flex-col justify-center">
        <div className="bg-[#EBF9F4] md:w-32 md:h-32 w-28 h-28 aspect-square rounded-full flex flex-col justify-center text-center text-primaryGreen">
          <div>
            <span className="text-4xl">76</span>%
          </div>
        </div>
      </div>
      <div className="flex flex-col justify ml-2 h-full text-tertiaryText font-medium shrink">
        <PercentageBar text="Buy" percentage={76} color="#00B386" />
        <PercentageBar text="Hold" percentage={15} color="#C7C8CE" />
        <PercentageBar text="Sell" percentage={9} color="#F7324C" />
      </div>
    </div>
  );
};

export default AnalystEstimates;

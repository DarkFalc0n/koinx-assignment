import { FCProps } from "@/types";
import React from "react";
import { preconnect } from "react-dom";

interface TPercentageBar {
  text: string;
  percentage: number;
  color: string;
}

const PercentageBar: FCProps<TPercentageBar> = ({
  text,
  percentage,
  color,
}) => {
  return (
    <div className="flex grow justify-center">
      <div className="md:w-[54px] w-[40px]">{text}</div>
      <div className={`grow md:w-[360px] w-[140px] h-full md:mr-4 mr-2 flex`}>
        <div
          style={{ backgroundColor: color, width: `${percentage}%` }}
          className={`h-2 my-2 mx-2 rounded-full`}
        ></div>
        {percentage}%
      </div>
    </div>
  );
};

export default PercentageBar;

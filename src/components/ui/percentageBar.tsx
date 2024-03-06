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
      <div className="w-[54px]">{text}</div>
      <div className={`grow md:w-[360px] w-[100px] h-full mr-4`}>
        <div
          style={{ backgroundColor: color, width: `${percentage}%` }}
          className={`h-2 my-2 rounded-full`}
        ></div>
      </div>
      {percentage}%
    </div>
  );
};

export default PercentageBar;

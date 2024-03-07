import { FCProps } from "@/types";
import React, { ReactNode } from "react";

interface IMemberData {
  name: string;
  designation: string;
  description: string;
  image: ReactNode;
}

const MemberCard: FCProps<IMemberData> = ({
  name,
  designation,
  description,
  image,
}) => {
  return (
    <div className="w-full bg-cardBlue flex flex-col justify-center rounded-lg my-6">
      <div className="w-full flex justify-between gap-6 md:flex-row flex-col">
        <div className="m-3 min-w-32 flex flex-col justify-center items-center text-center">
          {image}
          <div className="font-semibold text-center mt-3">{name}</div>
          <div className="text-tertiaryText font-medium text-xs text-center">
            {designation}
          </div>
        </div>
        <div className="flex flex-col justify-center mr-5 ml-3 md:ml-2 mb-3 md:mb-0">
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

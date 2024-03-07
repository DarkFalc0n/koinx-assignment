import { FCProps } from "@/types";
import React, { ReactNode } from "react";
import SecondaryButton from "./secondaryButton";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ICTACard {
  text: string;
  buttonText: string;
  image: ReactNode;
}

const CTACard: FCProps<ICTACard> = ({ className, text, buttonText, image }) => {
  return (
    <div
      className={cn(
        "md:min-w-[390px] w-full rounded-lg flex justify-start p-3 md:grow",
        className
      )}
    >
      <div className="rounded-full items-center">{image}</div>
      <div className="flex flex-col shrink justify-center ml-7">
        <div className="text-xl text-card font-semibold">{text}</div>
        <SecondaryButton
          className={"w-[145px] h-[30px] md:mt-3 mt-1 text-sm"}
          height={30}
          width={140}
        >
          {buttonText}
          <ArrowRight size={14} className="ml-1 inline" />
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CTACard;

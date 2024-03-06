import { FCProps } from "@/types";
import { ReactNode } from "react";

interface IEventCard {
  title: string;
  description: string;
  icon: ReactNode;
  variant: "green" | "blue";
}

const EventCard: FCProps<IEventCard> = ({
  icon,
  title,
  description,
  variant,
}) => {
  return (
    <div
      className={`md:w-[456px] w-[319px] md:h-[204px] h-[145px] md:p-5 p-3 rounded-lg flex ${
        variant === "green" ? "bg-cardGreen" : "bg-cardBlue"
      } gap-2`}
    >
      <div className="w-11 h-11 rounded-full text-card">{icon}</div>
      <div>
        <div className="md:text-sm text-xs font-medium text-primaryText">
          {title}
        </div>
        <div className="md:text-sm text-[10px] text-tertiaryText mt-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

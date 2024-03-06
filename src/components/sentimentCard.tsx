import { Info, Newspaper } from "lucide-react";
import AnalystEstimates from "./analystEstimates";
import EventCard from "./ui/eventCard";
const SentimentCard = () => {
  return (
    <div className="w-full bg-card text-primaryText py-4 px-2 md:p-6 ">
      <div className="text-2xl font-semibold">Sentiment</div>
      <div className="text-xl md:text-lg text-secondaryText font-semibold my-4">
        Key Events
        <Info size={20} className="ml-2 inline" />
      </div>
      {/* <EventsCarousel /> */}
      <EventCard
        title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
        description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
        icon={
          <div className="rounded-full bg-primaryGreen p-2">
            <Newspaper size={28} />
          </div>
        }
        variant="green"
      />
      <EventCard
        title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
        description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
        icon={
          <div className="rounded-full bg-primaryBlue p-2">
            <Newspaper size={28} />
          </div>
        }
        variant="blue"
      />
      <div className="text-xl md:text-lg text-secondaryText font-semibold mt-4">
        Analyst Estimates
        <Info size={20} className="ml-2 inline" />
      </div>
      <AnalystEstimates />
    </div>
  );
};

export default SentimentCard;

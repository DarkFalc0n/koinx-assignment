import GetStartedSvg from "./svgComponents/getStartedSvg";
import SecondaryButton from "./ui/secondaryButton";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="bg-primaryBlue md:w-[426px] w-full text-card flex flex-col md:px-12 px-3 justify-center rounded-2xl md:pb-24 pb-6 md:pt-8 pt-6">
      <GetStartedSvg />
      <div className="w-full text-center font-bold text-2xl md:text-xl md:-order-2 mt-2 mb-5 md:mb-3">
        Get Started with KoinX for FREE
      </div>
      <div className="w-full text-center font-medium text-sm md:-order-1 md:mb-5">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <SecondaryButton
        height={48}
        width={300}
        className="mx-auto mt-5 md:mt-3 items-center"
      >
        Get Started for FREE
        <ArrowRight size={20} className="ml-2 inline" />
      </SecondaryButton>
    </div>
  );
};

export default GetStarted;

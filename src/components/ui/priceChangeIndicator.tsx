import { cn } from "@/lib/utils";
import { FCProps } from "@/types";

const PriceChangeIndicator: FCProps<{ change: number }> = ({
  change,
  className,
}) => {
  const truncatedChange = change.toFixed(2);
  const isUpTrend = change >= 0;
  const bgClass = isUpTrend ? "bg-cardGreen" : "bg-cardRed";
  const textClass = isUpTrend ? "text-primaryGreen" : "text-primaryRed";
  return (
    <div
      className={cn(
        "py-1 md:px-3 pt-[6px] flex px-1 mt-4 ml-4 rounded-sm",
        bgClass,
        textClass,
        className
      )}
    >
      <div>{isUpTrend ? "▲" : "▼"}</div> <div>{truncatedChange}%</div>
    </div>
  );
};

export default PriceChangeIndicator;

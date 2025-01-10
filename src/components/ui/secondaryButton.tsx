import { cn } from "@/lib/utils";
import { FCProps } from "@/types";

const SecondaryButton: FCProps<{ height: number; width: number }> = ({
  children,
  className,
}) => {
  return (
    <button
      className={cn(
        "secondarybuttongroup w-[250px] h-[50px] text-primaryText bg-card rounded-[8px] font-semibold py-2 px-6 flex flex-col justify-center",
        className
      )}
    >
      <div className="flex">{children}</div>
    </button>
  );
};

export default SecondaryButton;

import { FCProps } from "@/types";

const SecondaryButton: FCProps<{ height: number; width: number }> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`w-[250px] h-[50px] text-primaryText bg-card rounded-[8px] font-semibold py-2 px-6 ${className} flex flex-col justify-center`}
    >
      <div>{children}</div>
    </button>
  );
};

export default SecondaryButton;

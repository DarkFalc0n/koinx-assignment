import { FCProps } from "@/types";

const CTAButton: FCProps = ({ children }) => {
  return (
    <div className="w-[136] h-10 text-card bg-ctaGradient rounded-[8px] font-semibold py-2 px-6 flex flex-col justify-center">
      {children}
    </div>
  );
};

export default CTAButton;

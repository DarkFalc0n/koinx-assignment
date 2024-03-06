import Image from "next/image";
import CTAButton from "./ui/ctaButton";
const Header = () => {
  return (
    <div className="w-full h-20 bg-card px-14 shadow-md flex items-center justify-between absolute top-0">
      <div className="flex items-center">
        <Image
          src="/images/koinx_logo.png"
          alt="Koinx"
          width={120}
          height={40}
        />
      </div>
      <div className="flex items-center">
        <a href="/taxes" className="text-primary-blue font-semibold text-sm">
          Crypto Taxes
        </a>
        <a
          href="/tools"
          className="text-primary-blue font-semibold text-sm ml-8"
        >
          Free Tools
        </a>
        <a
          href="/resources"
          className="text-primary-blue font-semibold text-sm ml-8"
        >
          Resource Center
        </a>
        <CTAButton>Get Started</CTAButton>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import CTAButton from "./ui/ctaButton";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-20 bg-card md:px-14 px-6 shadow-md flex items-center justify-between absolute top-0 text-primaryText">
      <div className="flex items-center">
        <Image
          src="/images/koinx_logo.png"
          alt="Koinx"
          width={96}
          height={24}
        />
      </div>
      <div className="md:hidden block">
        <Menu size={28} />
      </div>
      <div className="md:flex items-center hidden">
        <a href="/taxes" className="font-semibold text-sm">
          Crypto Taxes
        </a>
        <a href="/tools" className="font-semibold text-sm ml-8">
          Free Tools
        </a>
        <a href="/resources" className="font-semibold text-sm ml-8">
          Resource Center
        </a>
        <CTAButton>Get Started</CTAButton>
      </div>
    </div>
  );
};

export default Header;

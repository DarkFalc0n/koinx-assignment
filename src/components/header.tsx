import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full h-20 bg-card px-14 shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/images/koinx_logo.png"
          alt="Koinx"
          width={120}
          height={40}
        />
      </div>
      <div className="flex items-center">
        <a href="#" className="text-primary-blue font-semibold text-sm">
          Sign In
        </a>
        <a href="#" className="text-primary-blue font-semibold text-sm ml-4">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;

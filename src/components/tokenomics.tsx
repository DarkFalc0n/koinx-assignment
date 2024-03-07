import React from "react";
import Image from "next/image";

const Tokenomics = () => {
  return (
    <div className="w-full bg-card text-primaryText py-4 px-2 md:p-6 my-5 md:block hidden">
      <div className="text-2xl font-semibold">Tokenomics</div>
      <div className="text-xl md:text-lg text-secondaryText font-semibold my-4">
        Initial Distribution
      </div>
      <div className="flex my-4">
        <Image
          src="/images/tokenomics.png"
          alt="tokenomics"
          width={180}
          height={180}
        />
        <div className="flex flex-col justify-center ml-8">
          <div className="my-2">
            <span className="text-primaryBlue align-top mx-2">⬤</span>Crowdsale
            investors: 80%
          </div>
          <div className="my-2">
            <span className="text-[#FAA002] align-top mx-2">⬤</span>Foundation:
            20%
          </div>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </div>
    </div>
  );
};

export default Tokenomics;

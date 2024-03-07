import React from "react";
import CTACard from "./ui/ctaCard";
import Image from "next/image";

const AboutCrypto = () => {
  return (
    <div className="w-full bg-card text-primaryText py-4 px-2 md:p-6 my-5 ">
      <div className="text-2xl font-semibold">About XXX</div>
      <div className="text-xl md:text-lg text-secondaryText font-semibold my-4">
        What is XXX
      </div>
      <div>XXX</div>
      <div className="text-xl md:text-lg text-secondaryText font-semibold my-4">
        Lorem ipsum dolor sit amet
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.{" "}
      </p>
      <p>
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <div className="text-2xl font-semibold my-4">Already holding XXX?</div>
      <div className="flex md:flex-row flex-col justify-between md:gap-8 gap-4 my-2">
        <CTACard
          className="bg-blueGreenGradient"
          text="Calculate your Profits"
          buttonText="Check Now"
          image={
            <Image
              src="/images/calc_profits.png"
              width={128}
              height={128}
              alt={"calculate profits"}
            />
          }
        />
        <CTACard
          className="bg-yellowOrangeGradient"
          text="Calculate your tax liability"
          buttonText="Check Now"
          image={
            <Image
              src="/images/calc_tax.png"
              width={128}
              height={128}
              alt={"calculate taxes"}
            />
          }
        />
      </div>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default AboutCrypto;

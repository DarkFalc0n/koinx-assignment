import React from "react";
import MemberCard from "./ui/memberCard";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div className="w-full bg-card text-primaryText py-4 px-2 md:p-6 my-5">
      <div className="text-2xl font-semibold">Team</div>
      <div>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </div>

      <MemberCard
        name="John Smith"
        designation="Designation Here"
        description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        image={
          <Image
            src="/images/profiles/john_smith.png"
            width={100}
            height={100}
            alt={"John Smith"}
          />
        }
      />
      <MemberCard
        name="Elina Williams"
        designation="Designation Here"
        description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        image={
          <Image
            src="/images/profiles/elina_williams.png"
            width={100}
            height={100}
            alt={"Elina Williams"}
          />
        }
      />
      <MemberCard
        name="John Smith"
        designation="Designation Here"
        description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        image={
          <Image
            src="/images/profiles/john_smith_2.png"
            width={100}
            height={100}
            alt={"John Smith"}
          />
        }
      />
    </div>
  );
};

export default TeamCard;

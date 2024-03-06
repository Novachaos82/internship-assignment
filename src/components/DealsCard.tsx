import { FC } from "react";
import image from "@/assets/builder.svg";
import Image from "next/image";
import TagCards from "./header/TagCards";
interface DealsCardProps {
  title?: string;
  description?: string;
  originalPrice?: string;
  discountedPrice?: string;
  discountText?: string;
  tags?: string[];
}

const DealsCard: FC<DealsCardProps> = ({
  title,
  description,
  discountText,
  discountedPrice,
  originalPrice,
  tags,
}) => {
  return (
    <div className="bg-white rounded-xl flex flex-col gap-4 justify-center items-center shadow-md  p-4  max-w-[333px] ">
      <div>
        <Image src={image} alt="builder" width={150} height={150} />
      </div>
      <div className="flex flex-col gap-2 ">
        <div>
          <div className="flex gap-2 flex-wrap w-full">
            {tags ? (
              tags.map((tag, index) => (
                <TagCards
                  key={index}
                  className="bg-[#F2F4F7] text-[#074786] py-1 min-w-fit"
                  text={tag}
                />
              ))
            ) : (
              <div className="flex gap-2">
                <TagCards
                  className="bg-[#F2F4F7] text-[#074786] py-1  min-w-fit"
                  text="Limited time "
                />
                <TagCards
                  className="bg-[#F2F4F7] text-[#074786] py-1  min-w-fit"
                  text="20% Off "
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center  text-[16px] text-[#626E79] font-semibold ">
          <p>{title ? title : "Webbuilder 1"}</p>
        </div>
        <div className=" text-[16px] text-[#626E79] leading-[24px] [word-spacing:5px]">
          {description
            ? description
            : "Computer Modern clasic with wix support"}
        </div>
        <div className="flex gap-2">
          <p className="tex-[20px] text-[#5C6874]">
            {originalPrice ? originalPrice : "$39.96"}
          </p>
          <p className="text-[14px] text-[#9FA9B3]">
            {discountedPrice ? discountedPrice : "$49.96"}
          </p>
          <p className="text-[13px] text-[#EF4C5D]">
            {discountText ? discountText : "(20% Off)"}
          </p>
        </div>
        <div>
          <button className="bg-[#1B88F4] text-white rounded-xl w-full h-[40px]">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealsCard;

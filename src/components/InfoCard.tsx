"use client";
import Image from "next/image";
import { FC, useState } from "react";
import image from "@/assets/builder.svg";
import {
  CheckCircle,
  CheckCircle2,
  CheckCircle2Icon,
  CheckCircleIcon,
  ChevronDown,
  ChevronUp,
  Star,
  StarHalf,
  Stars,
  Trophy,
} from "lucide-react";

interface InfoCardProps {
  MainHighlights?: string;
  HeadParagraph?: string;
  Heading?: string;
  ImageTag?: string;
  Feedback?: string;
  propRating?: number;
  ChoiceHightlight?: string;
  BenefitPoints?: { text: string }[];
  HighlightsPoints?: { rating: number; text: string }[];
}

const InfoCard: FC<InfoCardProps> = ({
  Feedback,
  ImageTag,
  Heading,
  MainHighlights,
  HeadParagraph,
  propRating,
  ChoiceHightlight,
  BenefitPoints,
  HighlightsPoints,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const rating = propRating !== undefined ? propRating : 9;
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          fill="#FFB80F"
          strokeWidth={1}
          color="#FFB80F"
          size={20}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          fill="#FFB80F"
          strokeWidth={1}
          color="#FFB80F"
          size={20}
        />
      );
    }

    // Fill the remaining stars with blanks
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`blank-${i}`}
          fill="transparent"
          strokeWidth={1}
          color="#FFB80F"
          size={20}
        />
      );
    }

    return stars;
  };
  return (
    <div className=" relative mx-auto max-w-[1024px] bg-white rounded-xl flex flex-col md:flex-row gap-10 shadow-md p-10">
      {/* choice hightlights */}
      {ChoiceHightlight ? (
        <div className="absolute -top-2 -left-2 bg-[#FF7724] text-white p-2 rounded-r-xl flex gap-2  text-[10px] md:text-[16px]">
          <Trophy width={20} height={20} />
          {ChoiceHightlight}
        </div>
      ) : (
        ""
      )}

      {/* Image */}
      <div className="flex">
        <div className="flex flex-col justify-center items-center ">
          <Image src={image} alt="builder" width={600} height={600} />
          <span className="text-[#626E79] text-[13px] font-inter">
            {ImageTag ? ImageTag : "builder"}
          </span>
        </div>
      </div>
      {/* description */}
      <div className="flex flex-col  ">
        <div className="flex flex-col">
          <h1 className="text-[#4B5665] text-[12px] md:text-[16px] font-bold">
            {Heading ? Heading : "WixPro 72-Inch Responsive Website Builder-"}

            <span className="text-[#626E79] font-light">
              {HeadParagraph
                ? HeadParagraph
                : `Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)`}
            </span>
          </h1>
        </div>
        {/* hightlights */}
        <div>
          <h1 className="text-[#4B5665] text-[10px] md:text-[16px] font-bold">
            Main highlights
          </h1>
          {showMore ? (
            <div>
              <div className="pl-5">
                <div className="bg-[#FFF4ED] p-2 rounded-[12px] flex flex-col gap-2 ">
                  {HighlightsPoints?.map((point: any, index: any) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center  text-[10px] md:text-[16px]"
                    >
                      <span className="bg-white text-[#1B88F4] p-1 rounded-[4px]">
                        {point.rating}
                      </span>

                      <span>{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 flex-col  text-[10px] md:text-[16px]">
                Why we love it
                {BenefitPoints?.map((point: any, index: any) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center  text-[10px] md:text-[16px]"
                  >
                    <CheckCircle2Icon fill="#EBF5FF" strokeWidth={1} />

                    <span className="text-[#4B5665]">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="pl-4 text-[#4B5665]  text-[10px] md:text-[16px]">
                {MainHighlights
                  ? MainHighlights
                  : `[What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.`}
              </p>
            </div>
          )}

          {/* Highlight points */}

          <div
            className="flex text-[#1B88F4] text-[10px] md:text-[16px]  gap-2 items-center hover:cursor-pointer pt-5 max-w-fit"
            onClick={toggleShowMore}
          >
            <p>Show {showMore ? "less" : "more"}</p>
            {showMore ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
      </div>
      {/* rating */}
      <div className="flex flex-col gap-4 md:gap-0 justify-end items-center">
        <div className=" md:absolute top-0 bg-[#F3F9FF] w-[135px] h-[118px] flex flex-col items-center justify-center rounded-xl md:rounded-t-none md:rounded-b-xl">
          <p className="text-[#074786] md:text-[32px]">
            {rating ? rating : 9.5}
          </p>
          <p className="text-[#074786] text-[10px] md:text-[14px]">
            {Feedback ? Feedback : "Exceptional"}
          </p>
          <div className="flex">{renderStars()}</div>
        </div>
        <div>
          <button className="bg-[#1B88F4] text-white rounded-xl  w-[232px] h-[40px]">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

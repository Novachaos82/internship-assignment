import DealsCard from "@/components/DealsCard";
import InfoCard from "@/components/InfoCard";
import Newsletter from "@/components/Newsletter";
import Header from "@/components/header/Header";

export default function Home() {
  const infoCardData = [
    {
      ChoiceHightlight: "Best Seller",

      ImageTag: "Builder 1",
      Heading: "WixPro 72-Inch Responsive Website Builder-1",
      HeadParagraph:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)-1",
      MainHighlights:
        "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.-1",
      propRating: 9.5,
      Feedback: "Exceptional",
      BenefitPoints: [
        {
          text: "building",
        },
        {
          text: "building",
        },
        {
          text: "building",
        },
      ],

      HighlightsPoints: [
        {
          rating: 9.9,
          text: "building",
        },
        {
          rating: 9.9,
          text: "building",
        },
        {
          rating: 9.9,
          text: "building",
        },
      ],
    },
    {
      ImageTag: "Builder 2",
      Heading: "WixPro 72-Inch Responsive Website Builder-2",
      HeadParagraph:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)-2",
      MainHighlights:
        "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.-2",
      propRating: 8.0,
      Feedback: "Great",
      BenefitPoints: [
        {
          text: "building",
        },
        {
          text: "building",
        },
        {
          text: "building",
        },
      ],

      HighlightsPoints: [
        {
          rating: 9.9,
          text: "building",
        },
        {
          rating: 9.9,
          text: "building",
        },
        {
          rating: 9.9,
          text: "building",
        },
      ],
    },
    {
      ChoiceHightlight: "Exclusive Deal",

      ImageTag: "Builder 3",
      Heading: "WixPro 72-Inch Responsive Website Builder-3",
      HeadParagraph:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)-3",
      MainHighlights:
        "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.-3",
      propRating: 7.2,
      Feedback: "Good",
      BenefitPoints: [
        {
          text: "building",
        },
        {
          text: "building",
        },
        {
          text: "building",
        },
      ],

      HighlightsPoints: [
        {
          rating: 9.9,
          text: "building",
        },
        {
          rating: 9.9,
          text: "building",
        },
        {
          rating: 9.9,
          text: "building",
        },
      ],
    },
  ];
  return (
    <main className="">
      {/* Header section */}
      <div className="pt-8">
        <Header />
      </div>
      <div>
        <div className="flex  flex-col gap-10 px-5 md:px-0">
          {infoCardData.map((data, index) => (
            <InfoCard key={index} {...data} />
          ))}
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto text-[#2C384A] md:text-[32px] my-10 px-5 md:px-0">
        Related deals you might like for
      </div>
      <div className="max-w-[1024px] mx-auto flex justify-center gap-3 my-10 flex-wrap">
        <DealsCard
          title="Webbuilder 1"
          description="Computer  Modern clasic with wix support"
          originalPrice="$39.96"
          discountedPrice="$49.96"
          discountText="(20% Off)"
          tags={["Limited", "50% Off", "Exclusive"]}
        />
        <DealsCard />
        <DealsCard />
      </div>
      <div className="">
        <Newsletter />
      </div>
    </main>
  );
}

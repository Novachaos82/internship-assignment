import { CheckCircle, ChevronDown, InfoIcon } from "lucide-react";
import { FC } from "react";
import TagCards from "./TagCards";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <section className="max-w-[1024px]  mx-auto  font-inter">
      {/* heading */}
      <div className="text-center md:text-left md:text-5xl text-[#2C384A] py-4">
        Best Website builders in the US
      </div>

      <div className="border-[#E1E4E6] flex justify-between py-4 text-[#4B5665] text-[9px] md:text-[13px] border-y-2 px-4 md:px-0">
        <div className="flex md:gap-4 items-center justify-center">
          <span className="flex items-center justify-center gap-2">
            <CheckCircle /> Last Updated
          </span>
          -<span>February 22, 2020</span>
          <span className="flex items-center justify-center gap-2">
            <InfoIcon /> Advertising Disclosure
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          Top Relevant
          <ChevronDown />
        </div>
      </div>

      {/* tagcards */}
      <div className="flex gap-4 py-4 flex-wrap px-5 md:px-0">
        <TagCards text="tools" />
        <TagCards text="AWS builder" />
        <TagCards text="Start Build" />
        <TagCards text="Build Supplies" />
        <TagCards text="Tooling" />
        <TagCards text="BlueHosting" />
      </div>
    </section>
  );
};

export default Header;

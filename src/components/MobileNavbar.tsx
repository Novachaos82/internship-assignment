"use client";
import { Menu, Pointer, Search } from "lucide-react";
import { FC, useState } from "react";

interface MobileNavbarProps {}

const MobileNavbar: FC<MobileNavbarProps> = ({}) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="sticky top-0 md:hidden w-full p-5 bg-bg-navbar z-50">
      <div className="flex flex-col text-[#D1D6DA] justify-center gap-8 md:gap-20 ">
        {/* Searchbar */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <input className="relative rounded-md py-2 outline-none md:w-[258px] pl-8 text-black" />
            <Search
              className="absolute top-1 inset-y-0 left-0 flex items-center pl-2"
              size={32}
              color="black"
            />
          </div>
          <Menu className="cursor-pointer" onClick={toggleLinks} />
        </div>

        {/* Links */}
        {showLinks && (
          <div className="font-inter flex flex-col gap-8 text-[14px] font-semibold md:font-normal">
            <p>Categories</p>
            <p>Website Builders</p>
            <p>Todays deals</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;

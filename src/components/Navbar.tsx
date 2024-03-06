import { Search } from "lucide-react";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="sticky top-0 hidden md:block w-full p-5 bg-bg-navbar z-50">
      <div className="flex text-[#D1D6DA] justify-center items-center gap-20">
        {/* searchbar */}
        <div className="relative">
          <input className="relative rounded-md py-2 outline-none w-[258px] px-10 text-black" />
          <Search
            className="absolute top-1 inset-y-0 left-0 flex items-center pl-2"
            size={32}
            color="black"
          />
        </div>
        {/* Links */}
        <div className="font-inter flex gap-8 text-[14px]">
          <p>Categories</p>
          <p>Website Builders</p>
          <p>Todays deals</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

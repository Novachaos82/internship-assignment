import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bottom-0 w-full  flex justify-center mx-auto bg-[#212731]">
      <div className="w-full rounded-t-[32px] drop-shadow-sm shadow-green-spread  pl-20 pr-20  pt-10 bg-[#212731] text-white">
        <div className="flex justify-around font-[400]">
          <div className="space-y-[48px]">
            <div className="space-y-[24px]">
              <div className="head font-space-grotesk">Categories</div>
              <div className="space-y-[10px] flex flex-col">
                <Link href={"/"}>Web Builder</Link>
                <Link href={"/"}>Hosting</Link>
                <Link href={"/"}>Data Center</Link>
                <Link href={"/"}>Robotic-Automation</Link>
              </div>
            </div>
          </div>
          <div className="space-y-[24px]">
            <Link href={"/operations"} className="head font-space-grotesk">
              Contact
            </Link>
            <div className="space-y-[10px] flex flex-col">
              <Link href={"/"}>Contact</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Terms Of Service</Link>
              <Link href={"/"}>Categories</Link>
              <Link href={"/"}>About</Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="head font-space-grotesk">United States</div>
            <ChevronDown />
          </div>
        </div>

        <div className="mt-28 mb-10 flex justify-between"></div>
      </div>
    </div>
  );
}

export default Footer;

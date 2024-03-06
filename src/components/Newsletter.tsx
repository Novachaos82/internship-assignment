import { FC } from "react";

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = ({}) => {
  return (
    <div className="max-w-[1024px] mx-auto flex gap-2 md:gap-0 flex-col md:flex-row justify-between my-10 items-center ">
      <div className="md:text-[32px] text-[#5C6874] md:max-w-[40%]">
        Sign up and get exclusive special deals
      </div>

      <div className="flex text-xs md:text-[14px]">
        <input
          type="text"
          placeholder="Enter your email address..."
          className="bg-white shadow-md   rounded-l-xl  p-4 outline-none border-none "
        />
        <button className="bg-[#1B88F4] text-white rounded-r-xl w-fit  px-2">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

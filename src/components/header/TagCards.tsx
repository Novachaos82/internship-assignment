import { cn } from "@/lib/utils";
import { FC, HtmlHTMLAttributes } from "react";

interface TagCardsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  text?: string;
}

const TagCards: FC<TagCardsProps> = ({ text, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white text-[13px] text-[#4B5665] min-w-[105px] rounded-xl px-[16px] py-[8px] w-fit",
        className
      )}
    >
      {text ? text : "tools"}
    </div>
  );
};

export default TagCards;

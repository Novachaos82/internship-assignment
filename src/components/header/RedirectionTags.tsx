import { FC } from "react";

interface RedirectionTagsProps {
  text: string;
  end?: boolean;
}

const RedirectionTags: FC<RedirectionTagsProps> = ({ text, end }) => {
  return (
    <div className="flex gap-2">
      <p>{text}</p>
      {end ? "" : <p>&gt;</p>}
    </div>
  );
};

export default RedirectionTags;

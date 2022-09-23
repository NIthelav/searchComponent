import React, { ReactNode, FC, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useToggle } from "../../../../../hooks/useToggle";
import { sliceTag } from "../../../../../util/sliceTag";
import { cn } from "../../../../../util/cn";
import "./Tag.css";

const cls = cn("tag");

export type TagType = "list" | "item";

interface TagProps {
  name: ReactNode;
  className?: string;
  onClick: (tag: string, type: TagType) => void;
  type?: TagType;
}

export const Tag: FC<TagProps> = ({
  name,
  className,
  onClick,
  type = "list",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleIsChecked = useToggle(setIsChecked);
  if (name === null || name === undefined) return <></>;
  return (
    <div className={cls("", { type }, [className])}>
      {type === "list" && (
        <input
          className={cls("checkbox")}
          type="checkbox"
          checked={isChecked}
          onClick={toggleIsChecked}
          onChange={() => {
            onClick(sliceTag(ReactDOMServer.renderToString(<>{name}</>)), type);
          }}
        />
      )}
      <p className={cls("text")}>{name}</p>
      {type === "item" && (
        <div
          className={cls("delete")}
          onClick={() => onClick(name as string, type)}
        />
      )}
    </div>
  );
};

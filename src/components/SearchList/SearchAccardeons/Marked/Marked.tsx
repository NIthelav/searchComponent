import React, { FC } from "react";
import { cn } from "../../../../util/cn";
import { capitalize } from "../../../../util/capitalize";
import "./Marked.css";

const cls = cn("marked");

interface markedProps {
  name: string;
  toMark: string;
}

export const Marked: FC<markedProps> = ({ name, toMark }) => {
  if (!name.toLowerCase().includes(toMark) || toMark === "")
    return <span>{name}</span>;
  const [first, ...second] = name.toLowerCase().split(toMark);
  return (
    <span>
      {capitalize(first)}
      <span className={cls()}>{first ? toMark : capitalize(toMark)}</span>
      {second}
    </span>
  );
};

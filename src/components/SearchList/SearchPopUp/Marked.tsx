import React, { FC } from "react";

interface markedProps {
  name: string;
  toMark: string;
}

export const Marked: FC<markedProps> = ({ name, toMark }) => {
  if (!name.toLowerCase().includes(toMark) || toMark === "")
    return <span>{name}</span>;
  const [first, second] = name.toLowerCase().split(toMark);
  return (
    <span className={toMark}>
      {first}
      <span style={{ color: "red" }}>
        {first ? toMark : toMark[0].toUpperCase() + toMark.slice(1)}
      </span>
      {second}
    </span>
  );
};

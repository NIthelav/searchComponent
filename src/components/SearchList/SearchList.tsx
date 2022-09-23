import React, { FC, useEffect, useState } from "react";
import { RegionProps } from "../../typings/RegionProps";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchAccardeons } from "./SearchAccardeons/SearchAccardeons";
import { useOuterClick } from "../../hooks/useOuterClick";
import { cn } from "../../util/cn";
import "./SearchList.css";

const cls = cn("searchList");

interface SerachListProps {
  list: RegionProps[];
}

export const SearchList: FC<SerachListProps> = ({ list }) => {
  const [searched, setSearched] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const isOuterClick = useOuterClick("SearchList", isOpened);
  useEffect(() => {
    setIsOpened(isOuterClick);
  }, [isOuterClick]);

  return (
    <div className={cls()} id={"SearchList"}>
      <SearchInput onChange={setSearched} open={() => setIsOpened(true)} />
      {isOpened && <SearchAccardeons searched={searched} regions={list} />}
    </div>
  );
};

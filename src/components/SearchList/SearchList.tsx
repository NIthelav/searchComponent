import React, { FC, useState } from "react";
import { RegionProps } from "../../typings/RegionProps";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchAccardeons } from "./SearchPopUp/SearchAccardeons";
import { useToggle } from "../../hooks/useToggle";
interface SerachListProps {
  list: RegionProps[];
}

export const SearchList: FC<SerachListProps> = ({ list }) => {
  const [searched, setSearched] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const onToggle = useToggle(setIsOpened);

  return (
    <>
      <SearchInput onChange={setSearched} toggle={onToggle} />
      {isOpened && <SearchAccardeons searched={searched} regions={list} />}
    </>
  );
};

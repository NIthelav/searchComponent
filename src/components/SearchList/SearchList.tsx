import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { RegionProps } from "../../typings/RegionProps";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchAccardeons } from "./SearchAccardeons/SearchAccardeons";
import { useOuterClick } from "../../hooks/useOuterClick";
import { TagType } from "./SearchAccardeons/Accordeon/Tag/Tag";
import { cn } from "../../util/cn";
import "./SearchList.css";

const cls = cn("searchList");

interface SerachListProps {
  list: RegionProps[];
}

export const SearchList: FC<SerachListProps> = ({ list }) => {
  const [searched, setSearched] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [tagList, setTagList] = useState([] as string[]);
  const [offsetPopUp, setOffsetPopUp] = useState(0);
  const inputRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setOffsetPopUp(inputRef.current?.offsetHeight || 0);
  }, [tagList]);

  const onTagClick = useCallback((tag: string, type: TagType) => {
    setTagList((tagList) => {
      if (!tagList.includes(tag)) {
        return tagList.concat(tag);
      } else {
        return tagList.filter((item) => item !== tag);
      }
    });
  }, []);

  const isOuterClick = useOuterClick("SearchList", isOpened);
  useEffect(() => {
    setIsOpened(isOuterClick);
  }, [isOuterClick]);

  return (
    <div className={cls()} id={"SearchList"}>
      <SearchInput
        getInputValue={(value) => setSearched(value.toLowerCase())}
        open={() => setIsOpened(true)}
        tags={tagList}
        ref={inputRef}
      />
      {isOpened && (
        <SearchAccardeons
          style={{ top: offsetPopUp + 30 }}
          searched={searched}
          regions={list}
          onClickTag={onTagClick}
        />
      )}
    </div>
  );
};

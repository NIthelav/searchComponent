import React, { FC, useEffect, useState, forwardRef } from "react";
import { Input } from "../../Input/Input";
import { useDebounce } from "../../../hooks/useDebounce";
import { Tag } from "../SearchAccardeons/Accordeon/Tag/Tag";
import { cn } from "../../../util/cn";
import "./SearchInput.css";

const cls = cn("searchInput");
interface SearchInputProps {
  getInputValue: (a: string) => void;
  open: () => void;
  tags: string[];
}

export const SearchInput = forwardRef<HTMLDivElement | null, SearchInputProps>(
  ({ getInputValue, open, tags }, ref) => {
    console.log(tags);
    return (
      <Input
        onFocus={open}
        className={cls("input")}
        getValue={getInputValue}
        debounceMs={500}
        ref={ref}
      >
        {tags.map((tag) => (
          <Tag
            key={tag}
            name={tag}
            type="item"
            className={cls("tag")}
            onClick={(tag) => console.log(tag)}
          />
        ))}
      </Input>
    );
  }
);

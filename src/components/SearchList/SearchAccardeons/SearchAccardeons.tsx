import React, { CSSProperties, FC, useCallback } from "react";
import { RegionProps } from "../../../typings/RegionProps";
import { Accordeon } from "./Accordeon/Accordeon";
import { Marked } from "./Marked/Marked";
import { TagType } from "./Accordeon/Tag/Tag";
import { cn } from "../../../util/cn";
import "./SearchAccordeons.css";

const cls = cn("searchAccordeons");

interface SearchAccordeonProps {
  searched: string;
  onClickTag: (tag: string, type: TagType) => void;
  regions: RegionProps[];
  style: CSSProperties;
}

export const SearchAccardeons: FC<SearchAccordeonProps> = ({
  searched,
  onClickTag,
  regions,
  style,
}) => {
  const filterRegion = useCallback(
    (region: RegionProps, searched: string): boolean => {
      if (region.name.toLowerCase().includes(searched)) {
        return true;
      } else if (region.inner) {
        return region.inner.some((reg) => filterRegion(reg, searched));
      }
      return false;
    },
    []
  );

  const drawRegions = useCallback(
    (regions: RegionProps[], searched: string = "", margin: number = 0) => {
      return regions.map((region) => {
        const isFiltered = filterRegion(region, searched) && searched !== "";
        return (
          <Accordeon
            style={{ marginLeft: margin + "px" }}
            name={<Marked name={region.name} toMark={searched} />}
            isOpened={isFiltered}
            onClickTag={onClickTag}
          >
            {region.inner && drawRegions(region.inner, searched, margin + 10)}
          </Accordeon>
        );
      });
    },
    [filterRegion, onClickTag]
  );

  return (
    <div className={cls()} style={style}>
      {drawRegions(regions, searched)}
    </div>
  );
};

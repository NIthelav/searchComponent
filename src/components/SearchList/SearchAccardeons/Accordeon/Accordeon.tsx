import React, {
  CSSProperties,
  FC,
  ReactElement,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useToggle } from "../../../../hooks/useToggle";
import { Tag, TagType } from "./Tag/Tag";
import { cn } from "../../../../util/cn";
import "./Accordeon.css";

const cls = cn("accordeon");

interface AccordeonProps {
  name: ReactNode;
  isOpened: boolean;
  style: CSSProperties;
  children:
    | ReactElement<AccordeonProps>
    | ReactElement<AccordeonProps>[]
    | null;
  onClickTag: (tag: string, type: TagType) => void;
}

export const Accordeon: FC<AccordeonProps> = ({
  name,
  isOpened,
  style,
  onClickTag,
  children,
}) => {
  const [active, setActive] = useState(isOpened);
  useEffect(() => setActive(isOpened), [isOpened]);
  const onToggle = useToggle(setActive);
  return (
    <>
      <div style={style} className={cls()}>
        {!!children && (
          <div className={cls("button", { active })} onClick={onToggle} />
        )}
        <Tag className={cls("name")} name={name} onClick={onClickTag} />
      </div>
      {active && children}
    </>
  );
};

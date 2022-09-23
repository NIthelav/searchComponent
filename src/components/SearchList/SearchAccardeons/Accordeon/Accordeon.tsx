import React, {
  CSSProperties,
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { cn } from "../../../../util/cn";
import { useToggle } from "../../../../hooks/useToggle";
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
}

export const Accordeon: FC<AccordeonProps> = ({
  name,
  isOpened,
  style,
  children,
}) => {
  const [active, setActive] = useState(isOpened);
  useEffect(() => setActive(isOpened), [isOpened]);
  const onToggle = useToggle(setActive);
  return (
    <>
      <div style={style} className={cls()} onClick={onToggle}>
        {!!children && <div className={cls("button", { active })}></div>}
        <p className={cls("name")}>{name}</p>
      </div>
      {active && children}
    </>
  );
};

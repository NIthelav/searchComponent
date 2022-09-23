import { ReactNode, MouseEvent, FocusEvent, ChangeEvent } from "react";

export interface InputProps {
  value?: string;
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  getValue?: (value: string) => void;
  debounceMs?: number;
}

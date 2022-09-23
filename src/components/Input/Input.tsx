import React, {
  FC,
  ChangeEvent,
  useState,
  useEffect,
  forwardRef,
  useRef,
  MouseEvent,
} from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { InputProps } from "./InputProps";
import { cn } from "../../util/cn";
import "./Input.css";

const cls = cn("input");

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    value,
    children,
    className,
    onClick,
    onFocus,
    onChange,
    onBlur,
    getValue,
    debounceMs = 0,
  } = props;
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);

  // Если есть getValue то возращаем с заданой задержкой
  const debounced = useDebounce(inputValue, debounceMs);
  useEffect(() => {
    getValue?.(debounced);
  }, [debounced, getValue]);

  useEffect(() => {
    if (value) setInputValue(value);
  }, [value, inputValue]);

  // Если хотят поставить onChange, вызываем его,
  // после чего проводим свои манипуляции
  const onChangeCompose = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setInputValue(e.target.value);
  };

  return (
    <div
      className={cls("", [className])}
      onClick={() => inputRef.current?.focus()}
      ref={ref}
    >
      {children}
      <input
        value={inputValue}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChangeCompose}
        className={cls("input")}
        ref={inputRef}
      />
    </div>
  );
});

import { useRef } from "react";
import { Enfant } from "./Enfant";

export function Parent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <Enfant ref={inputRef} />
      <button onClick={focusInput}>focus</button>
    </div>
  );
}

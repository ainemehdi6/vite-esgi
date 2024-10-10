import { forwardRef } from "react";

export const Enfant = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} value="hello" />;
});

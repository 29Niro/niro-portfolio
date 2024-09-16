import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, value = '', ...props }, ref) => {
  return (
    <input
      type={type}
      value={value} // Ensure value is not undefined
      className={cn(
        "flex h-9 w-full rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

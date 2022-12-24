import { styled } from "classname-variants/react";

export const Button = styled("button", {
  base: "",
  variants: {
    color: {
      primary: "bg-black text-white",
      error: "bg-red-900 text-white",
    },
    width: {
      fit: "w-fit h-fit",
      full: "w-full h-fit",
    },
    size: {
      xs: "rounded px-2 py-1",
      sm: "rounded px-2 py-1 text-lg",
      md: "rounded px-3 py-2 text-lg",
      lg: "rounded px-4 py-2 text-xl",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "xs",
    width: "fit",
  },
});

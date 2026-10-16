import clsx from "clsx";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

// Shared horizontal width/padding so nav, content, and footer align; opt out by not using this component when a page needs full-bleed width.
export default function Container({ className, ...rest }: Props) {
  return (
    <div
      className={clsx("container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    />
  );
}

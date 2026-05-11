import type { PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren<{
  className?: string;
}>;

export function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={[
        "text-3xl font-semibold tracking-tight text-balance",
        className,
      ].join(" ")}
    >
      {children}
    </h1>
  );
}


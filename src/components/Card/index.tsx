import { PropsWithChildren } from "react";
import clsx from "clsx";

function Card({
  className,
  children,
}: PropsWithChildren<{
  className?: string;
}>) {
  const classNames = clsx(
    "card border border-[#466E8799] rounded-2xl p-4",
    className
  );
  return <div className={classNames}>{children}</div>;
}

export default Card;

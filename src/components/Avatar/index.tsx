import clsx from "clsx";
import { PropsWithChildren } from "react";

function Avatar({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classNames = clsx(
    "flex justify-center items-center h-10 w-10 rounded-full bg-[#141F26] font-semibold",
    className
  );
  return <div className={classNames}>{children}</div>;
}

export default Avatar;

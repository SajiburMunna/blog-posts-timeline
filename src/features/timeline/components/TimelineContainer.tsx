import clsx from "clsx";
import { PropsWithChildren } from "react";

function TimelineContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classNames = clsx("min-w-full", className);

  return <div className={classNames}>{children}</div>;
}

export default TimelineContainer;

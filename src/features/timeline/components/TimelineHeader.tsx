import clsx from "clsx";
import { PropsWithChildren } from "react";

function TimelineHeader({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex justify-center">
      <div className="space-y-6 max-w-[636px]">{children}</div>
    </div>
  );
}

export default TimelineHeader;

TimelineHeader.Title = function Title({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classNames = clsx(
    "font-semibold text-[40px] leading-[48px] text-center text-white",
    className
  );
  return <h1 className={classNames}>{children}</h1>;
};

TimelineHeader.Description = function Description({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classNames = clsx(
    "font-normal text-center text-base leading-5 text-[#E6E6E6]",
    className
  );
  return <p className={classNames}>{children}</p>;
};

import { PropsWithChildren } from "react";

function TimelineHeader({ children }: PropsWithChildren<unknown>) {
  return <div className="space-y-6">{children}</div>;
}

export default TimelineHeader;

TimelineHeader.Title = function Title({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <h1 className="font-semibold text-[40px] leading-[48px] text-center text-white">
      {children}
    </h1>
  );
};

TimelineHeader.Description = function Description({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <p className="font-normal text-center text-base leading-5 text-[#E6E6E6]">
      {children}
    </p>
  );
};

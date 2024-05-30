import { PropsWithChildren } from "react";

function TimelineHeader({ children }: PropsWithChildren<unknown>) {
  return <div className="flex justify-center">
     <div className="space-y-6 max-w-[636px]">{children}</div> 
    </div>;
}

export default TimelineHeader;

TimelineHeader.Title = function Title({
  title
}: {
  title:string
}) {
  return (
    <h1 className="font-semibold text-[40px] leading-[48px] text-center text-white">
      {title}
    </h1>
  );
};

TimelineHeader.Description = function Description({
  description
}: {
  description:string
}) {
  return (
    <p className="font-normal text-center text-base leading-5 text-[#E6E6E6]">
      {description}
    </p>
  );
};

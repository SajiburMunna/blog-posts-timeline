import { PropsWithChildren } from "react";

function TimelineContainer({ children }: PropsWithChildren<unknown>) {
  return <div className="mt-[96px] min-w-full">{children}</div>;
}

export default TimelineContainer;

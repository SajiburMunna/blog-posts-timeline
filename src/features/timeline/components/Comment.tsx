import clsx from "clsx";
import { PropsWithChildren } from "react";

function Comment({ children }: PropsWithChildren<{ className?: string }>) {
  const classNames = "pt-4 space-y-3";
  return <div className={classNames}>{children}</div>;
}
export default Comment;

Comment.See = function See({
  onSeeComment,
  children,
  className,
}: PropsWithChildren<{
  onSeeComment: () => void;
  className?: string;
}>) {
  const classNames = clsx(
    "text-right cursor-pointer italic font-thin",
    className
  );
  return (
    <p onClick={onSeeComment} className={classNames}>
      {children}
    </p>
  );
};

Comment.Body = function Body({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classNames = clsx("text-[#E6E6E6] text-sm", className);
  return <div className={classNames}>{children}</div>;
};

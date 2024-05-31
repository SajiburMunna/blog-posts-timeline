import { PropsWithChildren } from "react";
import clsx from "clsx";

import Card from "../../../components/Card";

function Post({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  const classNames = clsx("bg-[#18262E] rounded-lg p-4", className);
  return (
    <Card>
      <div className={classNames}>{children}</div>
    </Card>
  );
}

export default Post;

Post.User = function User({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const classNames = clsx("flex items-center gap-2 mb-4", className);
  return <div className={classNames}>{children}</div>;
};

Post.Title = function Title({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const classNames = clsx(
    "font-semibold text-xl leading-6 text-white mb-2",
    className
  );
  return <h2 className={classNames}>{children}</h2>;
};

Post.Description = function Description({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  const classNames = clsx(
    "text-base font-normal text-[#E6E6E6] leading-5",
    className
  );
  return <p className={classNames}>{children}</p>;
};

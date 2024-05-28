import clsx from "clsx";
import { PropsWithChildren } from "react";

function BlogPostContainer({
  children,
  title,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  const classNames = clsx("w-full", className);

  return (
    <div className={classNames}>
      <h2 className="font-medium text-[28px] leading-8 mb-8">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default BlogPostContainer;
